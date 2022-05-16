import { CONSTANTS } from 'src';

describe('bsc', () => {

  it('provides constants for the bsc blockchain', async ()=> {

    expect(CONSTANTS['bsc'].ZERO).toEqual('0x0000000000000000000000000000000000000000')
    expect(CONSTANTS['bsc'].MAXINT).toEqual('115792089237316195423570985008687907853269984665640564039457584007913129639935')
    expect(CONSTANTS['bsc'].WRAPPED).toEqual('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
    expect(CONSTANTS['bsc'].NATIVE).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE')
    expect(CONSTANTS['bsc'].DECIMALS).toEqual(18)
    expect(CONSTANTS['bsc'].SYMBOL).toEqual('BNB')
    expect(CONSTANTS['bsc'].CURRENCY).toEqual('BNB')
    expect(CONSTANTS['bsc'].NAME).toEqual('BNB Smart Chain')
    expect(CONSTANTS['bsc'].USD).toEqual('0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56') // BUSD
    expect(CONSTANTS['bsc'].TRANSFER_GAS).toEqual(21000)

  });
});
