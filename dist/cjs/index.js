
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

let CONSTANTS = {
  ZERO: '0x0000000000000000000000000000000000000000',
  MAXINT: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  WRAPPED: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  NATIVE: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  DECIMALS: 18,
  SYMBOL: 'ETH',
  NAME: 'Ether',
};

let CONSTANTS$1 = {
  ZERO: '0x0000000000000000000000000000000000000000',
  MAXINT: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  WRAPPED: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  NATIVE: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  DECIMALS: 18,
  SYMBOL: 'BNB',
  NAME: 'Binance Coin',
};

let CONSTANTS$2 = {};

CONSTANTS$2['ethereum'] = CONSTANTS;
CONSTANTS$2['bsc'] = CONSTANTS$1;

exports.CONSTANTS = CONSTANTS$2;
