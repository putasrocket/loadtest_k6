export const sentryPayload = JSON.stringify({
    "event_id": "a9d0d324f1fe4009898d24969277ec0b",
    "sent_at": "2025-03-05T05:04:18.157Z",
    "sdk": { "name": "sentry.javascript.browser", "version": "7.120.3" },
    "trace": {
        "environment": "development",
        "public_key": "6462a315e56003539598a3441f5632e8",
        "trace_id": "e64638bf1f1d4041817138f943ad58ea",
        "sampled": "false"
    },
    "type": "event",
    "exception": {
        "values": [
            {
                "type": "AxiosError",
                "value": "Request failed with status code 404",
                "stacktrace": {
                    "frames": [
                        {
                            "filename": "https://automerchant.rocket-crm.tech/static/js/main.8d973826.js",
                            "function": "XMLHttpRequest.u",
                            "in_app": true,
                            "lineno": 8776,
                            "colno": 214052
                        }
                    ]
                },
                "mechanism": { "type": "onunhandledrejection", "handled": false }
            }
        ]
    },
    "level": "error",
    "platform": "javascript",
    "request": {
        "url": "https://automerchant.rocket-crm.tech/",
        "headers": {
            "Referer": "https://access.line.me/",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
        }
    },
    "event_id": "a9d0d324f1fe4009898d24969277ec0b",
    "timestamp": 1741151058.154,
    "environment": "development",
    "sdk": {
        "integrations": ["InboundFilters", "FunctionToString", "TryCatch", "Breadcrumbs", "GlobalHandlers", "LinkedErrors", "Dedupe", "HttpContext", "BrowserTracing", "Replay"],
        "name": "sentry.javascript.browser",
        "version": "7.120.3",
        "packages": [{ "name": "npm:@sentry/browser", "version": "7.120.3" }]
    },
    "contexts": {
        "trace": {
            "data": { "sentry.origin": "auto.pageload.browser", "sentry.op": "pageload", "sentry.source": "url" },
            "op": "pageload",
            "span_id": "abcb9278860e9721",
            "status": "internal_error",
            "trace_id": "e64638bf1f1d4041817138f943ad58ea",
            "origin": "auto.pageload.browser"
        }
    },
    "tags": { "transaction": "/" },
    "breadcrumbs": [
        { "timestamp": 1741151057.716, "category": "console", "data": { "arguments": ["test right", "Member card"], "logger": "console" }, "level": "log", "message": "test right Member card" },
        { "timestamp": 1741151057.72, "category": "console", "data": { "arguments": ["rightCircle", "memberTeirProgress"], "logger": "console" }, "level": "log", "message": "rightCircle memberTeirProgress" },
        { "timestamp": 1741151057.749, "category": "console", "data": { "arguments": ["AppRoute merchant", { "name": "Automate Merchant", "_id": "672aea1420435811be528a73", "themes": "[Object]", "enableAccess": true, "subCode": "LF6", "businessName": "Automate Merchant", "businessTypeName": "Others", "initPoint": 100, "welcomeImageUrls": "[Array]", "status": "ACTIVE", "lineIntegration": "[Object]", "prefix": "automerchant", "inviteFriendRules": "[Object]", "securityConfig": "[Object]", "countrySetting": "[Object]", "inviteSellerRule": "[Object]", "promotion": "[Array]", "memberTypeConfig": "[Object]", "memberShipTiers": "[Array]", "advanceSettings": "[Object]", "signUpSettings": "[Object]" }], "logger": "console" }, "level": "log", "message": "AppRoute merchant [object Object]" }
    ]
});

export const postPayloadRedeemed = JSON.stringify({
    "objectId": "677def7442004f2b1cf90807",
    "quantity": 1,
    "status": "ACTIVE",
    "type": "REWARD",
    "variants": [],
    "shippingAddress": ""
});

export const getAllDistrictByAmphurId = JSON.stringify({
    "amphur_id": null,
    "xpage": 1,
    "xlimit": 100

});

export const getAllAmphurByProvinceId = JSON.stringify({
    "province_id": null,
    "xpage": 1,
    "xlimit": 100
});

export const clientLoginLine = JSON.stringify({
        "token": "eyJhbGciOiJIUzI1NiJ9.AFh3KuuXg9yW4S_fxMKvjWvLW2Ltj1_0w5OdAQ83Kw2QL6F-b4iRpQyMjvnkzJEvfCGZokFhUu3nA4vuFmsOmEPJ1BuAYjGz6g5uCMs8qZDfpqh7HtbBRS-5SJwzmPzJ6W7WiMs0t4hFCu375sRLY1vxS7iZENZGtdzl7AD52QQ.7ionXkNyWlIvSvGtoodAyrrqQvnVz9jeXatphM2U5ss",
        "refreshToken": "123",
        "tokenId": "eyJraWQiOiIxZjA2N2VlYzU5OWI3NGJmNGUyOGMyNDNjN2ZiYTY0NjNhMDM1OTMzNTUzZTMxZjdhMzg4ZTE0ZDQ0ZmE0OGUzIiwidHlwIjoiSldUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2FjY2Vzcy5saW5lLm1lIiwic3ViIjoiVTdlZjg0NjUzZjYxYzM5YzRiNTZhNmVlZmM1ZmVkZmViIiwiYXVkIjoiMjAwNzAxNTM1NyIsImV4cCI6MTc0MTI1NzI0MywiaWF0IjoxNzQxMjUzNjQzLCJhbXIiOlsibGluZXNzbyJdLCJuYW1lIjoiVGh1bmciLCJwaWN0dXJlIjoiaHR0cHM6Ly9wcm9maWxlLmxpbmUtc2Nkbi5uZXQvMGhZN0dPNFpHX0JoaDZOaGNVbEFGNVQwWnpDSFVOR0FCUUFsQWFLVmRqVVg4RUIwbEhFbGhPZVE5aFVDNENVaE5PUkZrZEtsMWlXU2xUIn0.Hk4-Y_c7Ufo9x4JbEVegueP2IfZYtlvUcxSrxtv4fVZuVhmkR5vnfC_3uEvXUougLtNhc0ThnhjBbtpnb8bb7A"

});