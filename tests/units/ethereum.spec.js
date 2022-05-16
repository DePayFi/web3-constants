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
    expect(CONSTANTS['ethereum'].USD).toEqual('0x6B175474E89094C44Da98b954EedeAC495271d0F') // DAI
    expect(CONSTANTS['ethereum'].TRANSFER_GAS).toEqual(21000)
    
  });
});
