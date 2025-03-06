import http from 'k6/http';
import { check, sleep } from 'k6';

function generateRandomIPFromCIDR(cidr) {
  const [base, mask] = cidr.split('/');     //CIDR -> base IP and subnet mask
  const baseParts = base.split('.').map(Number);    //base ip to array
  const maskParts = parseInt(mask, 10);   //change mask 

  const ipToInt = (ipParts) => {
    return (ipParts[0] << 24) + (ipParts[1] << 16) + (ipParts[2] << 8) + ipParts[3];
  };
  const startIp = ipToInt(baseParts);
  const range = Math.pow(2, (32 - maskParts)) - 2; // cal range
  const randomOffset = Math.floor(Math.random() * range) + 1;
  const finalIpInt = startIp + randomOffset;

  const finalIp = [
    (finalIpInt >> 24) & 255,
    (finalIpInt >> 16) & 255,
    (finalIpInt >> 8) & 255,
    finalIpInt & 255
  ].join('.');

  return finalIp;
}

export let options = {
  scenarios: {
    ooooo: {
      rate: 1000,
      timeUnit: "1s",
      preAllocatedVUs: 200,
      duration: "30s",
      maxVUs: 1000,
      executor: "constant-arrival-rate"
    }
  }
};

export default function () {
  const randomIP = generateRandomIPFromCIDR("192.168.1.0/28");
  // console.log(`${randomIP}`);
  const headers = {
    'X-Forwarded-For': randomIP, // Spoofing the client's IP
  };

  // const res = http.get('https://quickpizza.grafana.com/', { headers: headers });
  const res = http.get('https://futurepark.rocket-crm.app', { headers: headers });

  check(res, { "status is 200": (res) => res.status === 200 });
  sleep(0.3);
}
