## Quickstart

```
yarn add depay-web3-constants
```

or 

```
npm install --save depay-web3-constants
```

```javascript
import { CONSTANTS } from 'depay-web3-constants'

CONSTANTS['ethereum'].ZERO  // '0x0000000000000000000000000000000000000000'
CONSTANTS['ethereum'].MAXINT  // '115792089237316195423570985008687907853269984665640564039457584007913129639935'
CONSTANTS['ethereum'].NATIVE  // '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
CONSTANTS['ethereum'].DECIMALS  // 18
CONSTANTS['ethereum'].WRAPPED  // '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
CONSTANTS['ethereum'].SYMBOL  // 'ETH'
CONSTANTS['ethereum'].CURRENCY  // 'Ether'
CONSTANTS['ethereum'].NAME  // 'Ethereum'
CONSTANTS['ethereum'].USD  // '0x6B175474E89094C44Da98b954EedeAC495271d0F' (DAI)

CONSTANTS['bsc'].ZERO  // '0x0000000000000000000000000000000000000000'
CONSTANTS['bsc'].MAXINT  // '115792089237316195423570985008687907853269984665640564039457584007913129639935'
CONSTANTS['bsc'].NATIVE  // '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
CONSTANTS['bsc'].DECIMALS  // 18
CONSTANTS['bsc'].WRAPPED  // '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
CONSTANTS['bsc'].SYMBOL  // 'BNB'
CONSTANTS['bsc'].CURRENCY  // 'Binance Coin'
CONSTANTS['bsc'].NAME  // 'Binance Smart Chain'
CONSTANTS['bsc'].USD  // '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56' (BUSD)
```

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

e.g. `CONSTANTS['ethereum'].WRAPPED // '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'`

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
