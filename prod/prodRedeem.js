import http from 'k6/http';
import { check, group, sleep } from 'k6';

// Import Headers and getHeaders function
import { commonHeaders, lineApiHeaders, optoutApiHeaders, userProfileHeaders, postRequestHeaders, getHeaders, headersNewLine } from '../common/headerCommon.js';

import { sentryPayload, postPayloadRedeemed, getAllDistrictByAmphurId, getAllAmphurByProvinceId, clientLoginLine } from '../common/payload.js';

// Merchant ID
const merchantId = '672aea1420435811be528a73';
const baseUrl = 'https://uat-api.rocket-tech.app';
const storeUrl = 'https://api-store-admin.rocket-tech.app';

export let options = {
  scenarios: {
    scenario_1: {
      rate: 10,
      timeUnit: "1s",
      preAllocatedVUs: 10,
      duration: "1m",
      maxVUs: 10,
      executor: "constant-arrival-rate"
    }
  }
};

export default function () {
  group('User Journey redeem', function () {
    // Step 1: Get Merchant
    let response = http.get(`${baseUrl}/v2/merchants/automerchant`, { headers: getHeaders() });
    check(response, { 'Step 1:User profile loaded': (res) => res.status === 200 });

    // Step 2: Get Country Setting
    const payload = JSON.stringify({ "merchantId": merchantId });
    response = http.post(`${baseUrl}/api/rewarding/merchants/getCountrySetting`, payload, { headers: getHeaders() });
    check(response, { 'Step 2: Country setting loaded': (res) => res.status === 201 });

    // Step 3: Get Membership Tiers
    response = http.get(`${baseUrl}/v2/merchants/${merchantId}/membership-tiers`, { headers: getHeaders() });
    check(response, { 'Step 3: Membership tiers loaded': (res) => res.status === 200 });

    // Step 4: Get Advance Setting
    response = http.get(`${baseUrl}/v2/merchants/${merchantId}/advance-setting`, { headers: getHeaders() });
    check(response, { 'Step 4: Advance setting loaded': (res) => res.status === 200 });

    // Step 5: Get Signup Settings
    response = http.get(`${baseUrl}/v2/merchants/${merchantId}/signup-settings`, { headers: getHeaders() });
    check(response, { 'Step 5: Signup settings loaded': (res) => res.status === 200 });

    // Step 6: Get Context Token
    response = http.get('https://api.line.me/liff/v2/apps/2007015357-4D9r6PBg/contextToken', { headers: getHeaders(lineApiHeaders) });
    check(response, { 'Step 6: Context token loaded': (res) => res.status === 200 });

    // Step 7: Get Optout API
    response = http.get('https://optout-api.tr.line.me/enabled', { headers: getHeaders(optoutApiHeaders) });
    check(response, { 'Step 7: Optout API loaded': (res) => res.status === 200 });

    // Step 8: Get User Profile
    response = http.get(`${baseUrl}/api/rewarding/users/profile/user`, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 8: User profile data loaded': (res) => res.status === 200 });

    // Step 9: Get Merchant Again
    response = http.get(`${baseUrl}/v2/merchants/automerchant`, { headers: getHeaders() });
    check(response, { 'Step 9: User profile loaded': (res) => res.status === 200 });

    // Step 10: POST Request to oauth2 certs add on PROD
    response = http.get('https://api.line.me/oauth2/v2.1/certs', { headers: headersNewLine }); 
    check(response, { 'Step 10: POST Request to oauth2 certs loaded': (res) => res.status === 200 });

    // Step 11:POST Request to client line login add on PROD
    response = http.post(`${baseUrl}/api/rewarding/auth/client-line-login`, clientLoginLine, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 11:POST Request to client line login loaded': (res) => res.status === 201 });

    // Step 11: POST Request to get Address Is Require add on PROD
    response = http.get(`${baseUrl}/api/rewarding/auth/getAddressIsRequire`, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 12: POST Request to get Address Is Require loaded': (res) => res.status === 200 });

    // Step 12: POST Request to Get All Provinces
    const postPayloadProvinces = JSON.stringify({});
    response = http.post(`${storeUrl}/1.0.0/geos/getAllProvince`, postPayloadProvinces, { headers: getHeaders(postRequestHeaders) });
    check(response, { 'Step 12: All provinces data loaded': (res) => res.status === 200 });

    // Step 13: get Client Point Expire End Year
    response = http.post(`${baseUrl}/api/rewarding/points/getClientPointExpireEndYear`, null, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 13: get Client Point Expire End Year': (res) => res.status === 201 });

    // Step 14: get Pdpas To Accept
    response = http.get(`${baseUrl}/api/rewarding/clientpdpas/getPdpasToAccept`, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 14:get Pdpas To Accept': (res) => res.status === 200 });

    // Step 15: Get Membership Tiers Again
    response = http.get(`${baseUrl}/v2/merchants/${merchantId}/membership-tiers`, { headers: getHeaders() });
    check(response, { 'Step 15: Membership tiers loaded Again': (res) => res.status === 200 });

    // Step 16: Get Advance Setting Again
    response = http.get(`${baseUrl}/v2/merchants/${merchantId}/advance-setting`, { headers: getHeaders() });
    check(response, { 'Step 16: Advance setting loaded Again': (res) => res.status === 200 });

    // Step 17: POST Request to Sentry (Error Tracking)
    response = http.post('https://o4506426275790848.ingest.us.sentry.io/api/4507140925882368/envelope/?sentry_key=6462a315e56003539598a3441f5632e8&sentry_version=7&sentry_client=sentry.javascript.browser%2F7.120.3', sentryPayload, { headers: getHeaders() });
    check(response, { 'Step 17: Sentry event logged': (res) => res.status === 200 });

    // Step 18: Get User Profile Again
    response = http.get(`${baseUrl}/api/rewarding/users/profile/user`, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 18: User profile data loaded Again': (res) => res.status === 200 });

    // Step 19: get reward-cat loaded limit50
    response = http.get(`${baseUrl}/api/rewarding/reward-cat?limit=50&page=1`, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 19: get reward-cat loaded limit50': (res) => res.status === 200 });

    // Step 20: get Pdpas To Accept Again
    response = http.get(`${baseUrl}/api/rewarding/clientpdpas/getPdpasToAccept`, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 20: get Pdpas To Accept': (res) => res.status === 200 });

    // Step 21: POST Request to Get All Provinces Again
    response = http.post(`${storeUrl}/1.0.0/geos/getAllProvince`, null, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 21: All provinces data loaded Again': (res) => res.status === 200 });

    // // Step 22: POST Request to Get All District By AmphurId
    // response = http.post(`${storeUrl}/1.0.0/geos/getAllDistrictByAmphurId`, getAllDistrictByAmphurId, { headers: getHeaders(userProfileHeaders) });
    // check(response, { 'Step 22:All District By AmphurId loaded': (res) => res.status === 200 });

    // Step 23: get reward-cat loaded limit100
    response = http.get(`${baseUrl}/api/rewarding/rewards/client?limit=100&page=1`, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 23: get reward-cat loaded limit100': (res) => res.status === 200 });

    // Step 24: get Auto Timer REWARD
    response = http.get(`${baseUrl}/api/rewarding/histories/67c94362c336839338e1ed48?type=REWARD`, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 24: get Auto Timer REWARD': (res) => res.status === 200 });

    // Step 25: Get User Profile and Again
    response = http.get(`${baseUrl}/api/rewarding/users/profile/user`, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 25: User profile data loaded Again': (res) => res.status === 200 });

    // // Step 26: POST Request to Get All District By AmphurId Again
    // response = http.post(`${storeUrl}/1.0.0/geos/getAllDistrictByAmphurId`, getAllDistrictByAmphurId, { headers: getHeaders(userProfileHeaders) });
    // check(response, { 'Step 26: All District By AmphurId loaded': (res) => res.status === 200 });

    // // Step 27: POST Request to Get get All Amphur By ProvinceId
    // response = http.post(`${storeUrl}/1.0.0/geos/getAllAmphurByProvinceId`, getAllAmphurByProvinceId, { headers: getHeaders(userProfileHeaders) });
    // check(response, { 'Step 27: Get get All Amphur By ProvinceId loaded': (res) => res.status === 200 });

    // Step 28: POST Request for Redeemed Reward
    response = http.post(`${baseUrl}/api/rewarding/rewards/redeemed`, postPayloadRedeemed, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 28: Reward redeemed successfully': (res) => res.status === 201 });
  });

  sleep(0.3);

}
