"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
var TOKEN_API = 'BQDuWvwhriC4MxD0hYtMAwhTHYJUMn6g9ZFbCyXt1ljPWDRlziCXC_KOF0_FHz28ZnlnWLuQCLlHDfWY5i2yRuc0TfOZYGVR_nUhqB2Oxef3_GK9re9o6mQpOGF1OKfw1iCgUkRLMxi2_-lonLY8ixb1MncINrg1Wg';
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var HEADERS = {
  headers: {
    Authorization: "'Bearer ".concat(TOKEN_API, "'")
  }
};
exports.HEADERS = HEADERS;