// Common headers
export const commonHeaders = {
  'merchant-prefix': 'automerchant',
  'sec-ch-ua-platform': 'macOS',
  'Referer': 'https://automerchant.rocket-crm.tech/',
  'sec-ch-ua': 'Not(A:Brand;v="99", "Google Chrome";v="133", "Chromium";v="133")',
  'x-nonce': '',
  'sec-ch-ua-mobile': '?0',
  'client-id': 'rewarding-user-site',
  'Access-Control-Allow-Origin': '*',
  'x-signature': '',
  'X-Requested-With': 'XMLHttpRequest',
  'merchant-id': '672aea1420435811be528a73',
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
};

// Function to combine common headers with extra specific headers
export function getHeaders(extraHeaders = {}) {
  return {
    ...commonHeaders,
    ...extraHeaders // add specific headers
  };
}

// Line API headers
export const lineApiHeaders = {
  'sec-ch-ua-platform': 'macOS',
  'Referer': 'https://automerchant.rocket-crm.tech/',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
  'Accept': 'application/json',
  'sec-ch-ua': 'Not(A:Brand;v="99", "Google Chrome";v="133", "Chromium";v="133")',
  'Content-Type': 'application/json',
  'sec-ch-ua-mobile': '?0'
};

// Optout API headers
export const optoutApiHeaders = {
  'accept': '*/*',
  'accept-language': 'en-US,en;q=0.9',
  'origin': 'https://access.line.me',
  'priority': 'u=1, i',
  'referer': 'https://access.line.me/',
  'sec-ch-ua': 'Not(A:Brand;v="99", "Google Chrome";v="133", "Chromium";v="133")',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': 'macOS',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-site',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
  'Cookie': '_ga_YYPYEVWJ1F=GS1.1.1733214378.1.0.1733214381.0.0.0; _trmccid=7c7d6d04bdf0854c; _ldbrbid=lo__wYXBkgFcONYLyxkH0MtFXYWqaTYyd9UAzj3AiedwtwQ; _ga=GA1.2.616722697.1733214378; _ga_7N317628FB=GS1.2.1733738059.1.0.1733738059.0.0.0; _ga_55GBBRNR0V=GS1.1.1733738059.1.0.1733738060.0.0.0; __is_login_sso=1; __try__=1741145881287'
};
// headersNewLine
export const headersNewLine = {
    "sec-ch-ua-platform": "macOS",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.aHNIHnmJwawZj62_xBQ7ynJWhKrjcptOpAJ0n7oaBwLEsbreY7OyZScjjt_kH0kGFGn0AFmstUPSNzJKquRHmGGZJMlDdor0RYAb7PPRZs81dThFFZHYna0WM4Zn7Eh7sytMiIx6LMbTkmGo1UgKSHYbmvhapD31XHRz5fMaMM4.-SKuPKtTpPlWLuVDWjIlgpvhqc6uZSQ9ExC-qalYaiI",
    "Referer": "https://automerchant.rocket-crm.tech/",
    "sec-ch-ua": "Not(A:Brand;v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\")",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "Accept": "application/json",
    "Content-Type": "application/json"
  
};

// User Profile headers
export const userProfileHeaders = {
  'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzkwNmE5NGI0OGQzNDhlMTFmYmMwYjgiLCJtZXJjaGFudElkIjoiNjcyYWVhMTQyMDQzNTgxMWJlNTI4YTczIiwidXNlclR5cGUiOiJDTElFTlQiLCJwZXJtaXNzaW9ucyI6bnVsbCwiaWF0IjoxNzQxMTQ2MDM5LCJleHAiOjE4Mjc1NDYwMzksImF1ZCI6InJld2FyZGluZ1BsYXRmb3JtOmF1dGgiLCJpc3MiOiJyZXdhcmRpbmdQbGF0Zm9ybSJ9.Rd7oTphvC-hjNvkAXXRB-1rS81kSeBM6aKpuvBvX8xk'
};

// Headers for the new POST request
export const postRequestHeaders = {
  'merchant-prefix': 'automerchant',
  'sec-ch-ua-platform': 'macOS',
  'Referer': 'https://automerchant.rocket-crm.tech/',
  'sec-ch-ua': 'Not(A:Brand;v="99", "Google Chrome";v="133", "Chromium";v="133")',
  'sec-ch-ua-mobile': '?0',
  'client-id': 'rewarding-user-site',
  'Access-Control-Allow-Origin': '*',
  'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzkwNmE5NGI0OGQzNDhlMTFmYmMwYjgiLCJtZXJjaGFudElkIjoiNjcyYWVhMTQyMDQzNTgxMWJlNTI4YTczIiwidXNlclR5cGUiOiJDTElFTlQiLCJwZXJtaXNzaW9ucyI6bnVsbCwiaWF0IjoxNzQxMTQ4NzE0LCJleHAiOjE4Mjc1NDg3MTQsImF1ZCI6InJld2FyZGluZ1BsYXRmb3JtOmF1dGgiLCJpc3MiOiJyZXdhcmRpbmdQbGF0Zm9ybSJ9.Aq5hJBNJvbT3rd1naO3CUkxvxdOWG1bx9VXIzb5PFPM',
  'X-Requested-With': 'XMLHttpRequest',
  'Accept': 'application/json, text/plain, */*',
  'merchant-id': '672aea1420435811be528a73',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36'
};
