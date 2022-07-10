import { CONSTANTS } from 'src';

describe('solana', () => {

  it('provides constants for the solana blockchain', async ()=> {

    expect(CONSTANTS['solana'].ZERO).toEqual('0')
    expect(CONSTANTS['solana'].MAXINT).toEqual('18446744073709551615')
    expect(CONSTANTS['solana'].WRAPPED).toEqual('So11111111111111111111111111111111111111112')
    expect(CONSTANTS['solana'].NATIVE).toEqual('11111111111111111111111111111111')
    expect(CONSTANTS['solana'].DECIMALS).toEqual(9)
    expect(CONSTANTS['solana'].SYMBOL).toEqual('SOL')
    expect(CONSTANTS['solana'].CURRENCY).toEqual('Solana')
    expect(CONSTANTS['solana'].NAME).toEqual('Solana')
    expect(CONSTANTS['solana'].USD).toEqual('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v') // USDC
    expect(CONSTANTS['solana'].USD_DECIMALS).toEqual(6)

  });
});
