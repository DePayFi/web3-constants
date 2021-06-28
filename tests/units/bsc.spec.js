import CONSTANTS from 'dist/cjs/index.js';

describe('bsc', () => {

  it('provides constants for the bsc blockchain', async ()=> {

    expect(CONSTANTS['bsc'].ZERO).toEqual('0x0000000000000000000000000000000000000000')
    expect(CONSTANTS['bsc'].MAXINT).toEqual('115792089237316195423570985008687907853269984665640564039457584007913129639935')
    
  });
});
