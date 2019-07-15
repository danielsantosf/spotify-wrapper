"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
var TOKEN_API = 'BQCVDDD2sUWPpMJbPOCjr-99iL2ydebofsxiubjlVCauj1rKWCZwAhojbtDDnHURPP3WVrUHJqb_Skb7yh1pFx7ZLXoHx07Ht-DpeSqGOOhu2mzdDQfh0QT23VSbSqOEei2eYwH2BZlarWPKiNhRND5FS7FDHr5JvA';
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var HEADERS = {
  headers: {
    Authorization: "'Bearer ".concat(TOKEN_API, "'")
  }
};
exports.HEADERS = HEADERS;