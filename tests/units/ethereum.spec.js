import { CONSTANTS } from 'src';

describe('ethereum', () => {

  it('provides constants for the ethereum blockchain', async ()=> {

    expect(CONSTANTS['ethereum'].ZERO).toEqual('0x0000000000000000000000000000000000000000')
    expect(CONSTANTS['ethereum'].MAXINT).toEqual('115792089237316195423570985008687907853269984665640564039457584007913129639935')
    expect(CONSTANTS['ethereum'].WRAPPED).toEqual('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
    expect(CONSTANTS['ethereum'].NATIVE).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE')
    expect(CONSTANTS['ethereum'].DECIMALS).toEqual(18)
    expect(CONSTANTS['ethereum'].SYMBOL).toEqual('ETH')
    expect(CONSTANTS['ethereum'].CURRENCY).toEqual('Ether')
    expect(CONSTANTS['ethereum'].NAME).toEqual('Ethereum')
    expect(CONSTANTS['ethereum'].USD).toEqual('0xdAC17F958D2ee523a2206206994597C13D831ec7')
    expect(CONSTANTS['ethereum'].USD_DECIMALS).toEqual(6)
    
  });
});
