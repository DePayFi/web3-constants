(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.BlockchainConstants = factory());
}(this, (function () { 'use strict';

  let CONSTANTS = {
    ZERO: '0x0000000000000000000000000000000000000000',

    MAXINT: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  let CONSTANTS$1 = {
    ZERO: '0x0000000000000000000000000000000000000000',

    MAXINT: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  };

  let CONSTANTS$2 = {};

  CONSTANTS$2['ethereum'] = CONSTANTS;
  CONSTANTS$2['bsc'] = CONSTANTS$1;

  return CONSTANTS$2;

})));
