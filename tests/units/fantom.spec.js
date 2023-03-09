import { CONSTANTS } from 'src';

describe('fantom', () => {

  it('provides constants for the fantom blockchain', async ()=> {

    expect(CONSTANTS['fantom'].ZERO).toEqual('0x0000000000000000000000000000000000000000')
    expect(CONSTANTS['fantom'].MAXINT).toEqual('115792089237316195423570985008687907853269984665640564039457584007913129639935')
    expect(CONSTANTS['fantom'].WRAPPED).toEqual('0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83')
    expect(CONSTANTS['fantom'].NATIVE).toEqual('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE')
    expect(CONSTANTS['fantom'].DECIMALS).toEqual(18)
    expect(CONSTANTS['fantom'].SYMBOL).toEqual('FTM')
    expect(CONSTANTS['fantom'].CURRENCY).toEqual('Fantom')
    expect(CONSTANTS['fantom'].NAME).toEqual('Fantom')
    expect(CONSTANTS['fantom'].USD).toEqual('0x04068da6c83afcfa0e13ba15a6696662335d5b75') // USDC
    expect(CONSTANTS['fantom'].USD_DECIMALS).toEqual(6)

  });
});
