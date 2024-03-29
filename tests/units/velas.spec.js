import { CONSTANTS } from 'src';

describe('velas', () => {

  it('provides constants for the velas blockchain', async ()=> {

    expect(CONSTANTS['velas'].ZERO).toEqual('0x0000000000000000000000000000000000000000')
    expect(CONSTANTS['velas'].MAXINT).toEqual('115792089237316195423570985008687907853269984665640564039457584007913129639935')
    expect(CONSTANTS['velas'].WRAPPED).toEqual('0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126')
    expect(CONSTANTS['velas'].NATIVE).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE')
    expect(CONSTANTS['velas'].DECIMALS).toEqual(18)
    expect(CONSTANTS['velas'].SYMBOL).toEqual('VLX')
    expect(CONSTANTS['velas'].CURRENCY).toEqual('Velas')
    expect(CONSTANTS['velas'].NAME).toEqual('Velas')
    expect(CONSTANTS['velas'].USD).toEqual('0x01445C31581c354b7338AC35693AB2001B50b9aE')
    expect(CONSTANTS['velas'].USD_DECIMALS).toEqual(6)

  });
});
