import http from 'k6/http';
import { check, group, sleep } from 'k6';

// Import Headers and getHeaders function
import { commonHeaders, lineApiHeaders, optoutApiHeaders, userProfileHeaders, getHeaders, headersNewLine } from '../common/headerCommon.js';

import { clientLoginLine } from '../common/payload.js';

// Merchant ID
const merchantId = '672aea1420435811be528a73';
const baseUrl = 'https://uat-api.rocket-tech.app';

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
  group('User Journey sign up ', function () {
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

    // Step 8: get Question Sign Up Is Require
    response = http.get(`${baseUrl}/api/rewarding/auth/getQuestionSignUpIsRequire`, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 8: get Question Sign Up Is Require loaded': (res) => res.status === 200 });

    // Step 9: get Question Is Require
    response = http.get(`${baseUrl}/api/rewarding/auth/getQuestionIsRequire`, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 9: get Question Is Require loaded': (res) => res.status === 200 });

    // Step 10: get Address Is Require
    response = http.get(`${baseUrl}/api/rewarding/auth/getAddressIsRequire`, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 10: get Address Is Require loaded': (res) => res.status === 200 });

    // Step 11: POST Request to client-line-login
    response = http.post(`${baseUrl}/api/rewarding/auth/client-line-login`, clientLoginLine, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 11: POST Request to client-line-login loaded': (res) => res.status === 201 });

    // Step 12: POST Request to oauth2 certs
    response = http.get('https://api.line.me/oauth2/v2.1/certs', { headers: headersNewLine });
    check(response, { 'Step 12: POST Request to oauth2 certs loaded': (res) => res.status === 200 });

    // Step 13: get Pdpas To Accept
    response = http.get(`${baseUrl}/api/rewarding/clientpdpas/getPdpasToAccept`, { headers: getHeaders(userProfileHeaders) });
    check(response, { 'Step 13: get Pdpas To Accept loaded': (res) => res.status === 200 });


  });

  sleep(0.3);
}
