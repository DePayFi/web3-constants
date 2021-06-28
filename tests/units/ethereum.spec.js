import CONSTANTS from 'dist/cjs/index.js';

describe('ethereum', () => {

  it('provides constants for the ethereum blockchain', async ()=> {

    expect(CONSTANTS['ethereum'].ZERO).toEqual('0x0000000000000000000000000000000000000000')
    expect(CONSTANTS['ethereum'].MAXINT).toEqual('115792089237316195423570985008687907853269984665640564039457584007913129639935')
    expect(CONSTANTS['ethereum'].WRAPPED).toEqual('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2')
    
  });
});
