import { CONSTANTS } from 'dist/cjs/index.js';

describe('bsc', () => {

  it('provides constants for the bsc blockchain', async ()=> {

    expect(CONSTANTS['bsc'].ZERO).toEqual('0x0000000000000000000000000000000000000000')
    expect(CONSTANTS['bsc'].MAXINT).toEqual('115792089237316195423570985008687907853269984665640564039457584007913129639935')
    expect(CONSTANTS['bsc'].WRAPPED).toEqual('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
    expect(CONSTANTS['bsc'].NATIVE).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE')
    expect(CONSTANTS['bsc'].DECIMALS).toEqual(18)
    expect(CONSTANTS['bsc'].SYMBOL).toEqual('BNB')
    expect(CONSTANTS['bsc'].CURRENCY).toEqual('Binance Coin')
    expect(CONSTANTS['bsc'].NAME).toEqual('Binance Smart Chain')
    expect(CONSTANTS['bsc'].USD).toEqual('0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3') // DAI

  });
});
