## Quickstart

```
yarn add @depay/web3-constants
```

or 

```
npm install --save @depay/web3-constants
```

```javascript
import { CONSTANTS } from '@depay/web3-constants'

CONSTANTS['ethereum'].ZERO          // '0x0000000000000000000000000000000000000000'
CONSTANTS['ethereum'].MAXINT        // '115792089237316195423570985008687907853269984665640564039457584007913129639935'
CONSTANTS['ethereum'].NATIVE        // '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
CONSTANTS['ethereum'].DECIMALS      // 18
CONSTANTS['ethereum'].WRAPPED       // '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
CONSTANTS['ethereum'].SYMBOL        // 'ETH'
CONSTANTS['ethereum'].CURRENCY      // 'Ether'
CONSTANTS['ethereum'].NAME          // 'Ethereum'
CONSTANTS['ethereum'].USD           // '0x6B175474E89094C44Da98b954EedeAC495271d0F' (DAI)
CONSTANTS['ethereum'].USD_DECIMALS  // 18

CONSTANTS['bsc'].ZERO               // '0x0000000000000000000000000000000000000000'
CONSTANTS['bsc'].MAXINT             // '115792089237316195423570985008687907853269984665640564039457584007913129639935'
CONSTANTS['bsc'].NATIVE             // '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
CONSTANTS['bsc'].DECIMALS           // 18
CONSTANTS['bsc'].WRAPPED            // '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
CONSTANTS['bsc'].SYMBOL             // 'BNB'
CONSTANTS['bsc'].CURRENCY           // 'Binance Coin'
CONSTANTS['bsc'].NAME               // 'Binance Smart Chain'
CONSTANTS['bsc'].USD                // '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56' (BUSD)
CONSTANTS['bsc'].USD_DECIMALS       // 18

CONSTANTS['polygon'].ZERO           // '0x0000000000000000000000000000000000000000'
CONSTANTS['polygon'].MAXINT         // '115792089237316195423570985008687907853269984665640564039457584007913129639935'
CONSTANTS['polygon'].NATIVE         // '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
CONSTANTS['polygon'].DECIMALS       // 18
CONSTANTS['polygon'].WRAPPED        // '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
CONSTANTS['polygon'].SYMBOL         // 'MATIC'
CONSTANTS['polygon'].CURRENCY       // 'Polygon'
CONSTANTS['polygon'].NAME           // 'Polygon'
CONSTANTS['polygon'].USD            // '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174' (USDC)
CONSTANTS['polygon'].USD_DECIMALS   // 18

CONSTANTS['solana'].ZERO                      // '0'
CONSTANTS['solana'].MAXINT                    // '340282366920938463463374607431768211455'
CONSTANTS['solana'].NATIVE                    // '11111111111111111111111111111111'
CONSTANTS['solana'].DECIMALS                  // 9
CONSTANTS['solana'].WRAPPED                   // 'So11111111111111111111111111111111111111112'
CONSTANTS['solana'].SYMBOL                    // 'SOL'
CONSTANTS['solana'].CURRENCY                  // 'Solana'
CONSTANTS['solana'].NAME                      // 'Solana'
CONSTANTS['solana'].USD                       // 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v' (USDC)
CONSTANTS['solana'].USD_DECIMALS              // 6
```

## Support

This library supports the following blockchains:

- [Ethereum](https://ethereum.org)
- [BNB Smart Chain](https://www.binance.org/smartChain)
- [Polygon](https://polygon.technology)
- [Solana](https://solana.com/)

## Constants

### ZERO

The Address Zero.

```javascript
CONSTANTS[blockchain].ZERO
```

e.g. `CONSTANTS['ethereum'].ZERO // '0x0000000000000000000000000000000000000000'`

### MAXINT

The number value (as a string) representing the maximum integer value (usually uint256).

```javascript
CONSTANTS[blockchain].MAXINT
```

e.g. `CONSTANTS['ethereum'].ZERO // '115792089237316195423570985008687907853269984665640564039457584007913129639935'`

### NATIVE

The address used to represent the native blockchain token alongside other token addresses.

```javascript
CONSTANTS[blockchain].NATIVE
```

e.g. `CONSTANTS['ethereum'].NATIVE // '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'`

### DECIMALS

The decimals for the native token of the individual blockchain.

```javascript
CONSTANTS[blockchain].DECIMALS
```

e.g. `CONSTANTS['ethereum'].DECIMALS // 18`

### WRAPPED

The address of the token contract providing a wrapped token of individual blockchain's native token.

```javascript
CONSTANTS[blockchain].WRAPPED
```

e.g. `CONSTANTS['ethereum'].WRAPPED // '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'`

### SYMBOL

The symbol of the native currency.

```javascript
CONSTANTS[blockchain].SYMBOL
```

e.g. `CONSTANTS['ethereum'].SYMBOL // 'ETH'`

### CURRENCY

The written-out name of the native token on that blockchain.

```javascript
CONSTANTS[blockchain].CURRENCY
```

e.g. `CONSTANTS['ethereum'].CURRENCY // 'Ether'`

### NAME

The written-out name of the blockchain.

```javascript
CONSTANTS[blockchain].NAME
```

e.g. `CONSTANTS['ethereum'].NAME // 'Ethereum'`

## Development

### Get started

```
yarn install
yarn dev
```

### Release

```
npm publish
```
