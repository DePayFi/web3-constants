(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Web3Constants = {}));
}(this, (function (exports) { 'use strict';

  let CONSTANTS = {
    ZERO: '0x0000000000000000000000000000000000000000',
    MAXINT: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
    WRAPPED: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    NATIVE: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    DECIMALS: 18,
    SYMBOL: 'BNB',
    CURRENCY: 'BNB',
    NAME: 'BNB Smart Chain',
    USD: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    USD_DECIMALS: 18
  };

  let CONSTANTS$1 = {
    ZERO: '0x0000000000000000000000000000000000000000',
    MAXINT: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
    WRAPPED: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    NATIVE: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    DECIMALS: 18,
    SYMBOL: 'ETH',
    CURRENCY: 'Ether',
    NAME: 'Ethereum',
    USD: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    USD_DECIMALS: 18
  };

  let CONSTANTS$2 = {
    ZERO: '0x0000000000000000000000000000000000000000',
    MAXINT: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
    WRAPPED: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    NATIVE: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    DECIMALS: 18,
    SYMBOL: 'FTM',
    CURRENCY: 'Fantom',
    NAME: 'Fantom',
    USD: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
    USD_DECIMALS: 6
  };

  let CONSTANTS$3 = {
    ZERO: '0x0000000000000000000000000000000000000000',
    MAXINT: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
    WRAPPED: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    NATIVE: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    DECIMALS: 18,
    SYMBOL: 'MATIC',
    CURRENCY: 'Polygon',
    NAME: 'Polygon',
    USD: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    USD_DECIMALS: 6
  };

  let CONSTANTS$4 = {
    ZERO: '0',
    MAXINT: '340282366920938463463374607431768211455',
    WRAPPED: 'So11111111111111111111111111111111111111112',
    NATIVE: '11111111111111111111111111111111',
    DECIMALS: 9,
    SYMBOL: 'SOL',
    CURRENCY: 'Solana',
    NAME: 'Solana',
    USD: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    USD_DECIMALS: 6
  };

  let CONSTANTS$5 = {
    ZERO: '0x0000000000000000000000000000000000000000',
    MAXINT: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
    WRAPPED: '0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126',
    NATIVE: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    DECIMALS: 18,
    SYMBOL: 'VLX',
    CURRENCY: 'Velas',
    NAME: 'Velas',
    USD: '0xc111c29A988AE0C0087D97b33C6E6766808A3BD3',
    USD_DECIMALS: 18
  };

  let CONSTANTS$6 = {};

  CONSTANTS$6['ethereum'] = CONSTANTS$1;
  CONSTANTS$6['bsc'] = CONSTANTS;
  CONSTANTS$6['polygon'] = CONSTANTS$3;
  CONSTANTS$6['solana'] = CONSTANTS$4;
  CONSTANTS$6['fantom'] = CONSTANTS$2;
  CONSTANTS$6['velas'] = CONSTANTS$5;

  exports.CONSTANTS = CONSTANTS$6;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
