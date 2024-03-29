import { CONSTANTS } from 'src';

describe('polygon', () => {

  it('provides constants for the polygon blockchain', async ()=> {

    expect(CONSTANTS['polygon'].ZERO).toEqual('0x0000000000000000000000000000000000000000')
    expect(CONSTANTS['polygon'].MAXINT).toEqual('115792089237316195423570985008687907853269984665640564039457584007913129639935')
    expect(CONSTANTS['polygon'].WRAPPED).toEqual('0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270')
    expect(CONSTANTS['polygon'].NATIVE).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE')
    expect(CONSTANTS['polygon'].DECIMALS).toEqual(18)
    expect(CONSTANTS['polygon'].SYMBOL).toEqual('MATIC')
    expect(CONSTANTS['polygon'].CURRENCY).toEqual('Polygon')
    expect(CONSTANTS['polygon'].NAME).toEqual('Polygon')
    expect(CONSTANTS['polygon'].USD).toEqual('0xc2132D05D31c914a87C6611C10748AEb04B58e8F')
    expect(CONSTANTS['polygon'].USD_DECIMALS).toEqual(6)


  });
});
