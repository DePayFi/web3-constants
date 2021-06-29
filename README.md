## Quickstart

```
yarn add depay-blockchain-token
```

or 

```
npm install --save depay-blockchain-token
```

```javascript
import CONSTANTS from 'depay-blockchain-constants'

CONSTANTS['ethereum'].ZERO  // '0x0000000000000000000000000000000000000000'
CONSTANTS['ethereum'].MAXINT  // '115792089237316195423570985008687907853269984665640564039457584007913129639935'
CONSTANTS['ethereum'].NATIVE  // '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
CONSTANTS['ethereum'].WRAPPED  // '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'

CONSTANTS['bsc'].ZERO  // '0x0000000000000000000000000000000000000000'
CONSTANTS['bsc'].MAXINT  // '115792089237316195423570985008687907853269984665640564039457584007913129639935'
CONSTANTS['bsc'].NATIVE  // '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
CONSTANTS['bsc'].WRAPPED  // '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
```

## Constants

### ZERO

The Address Zero.

```javascript
CONSTANTS[blockchain].ZERO
```

e.g. `CONSTANTS['ethereum'].ZERO // 0x0000000000000000000000000000000000000000`

### MAXINT

The number value (as a string) representing the maximum integer value (usually uint256).

```javascript
CONSTANTS[blockchain].MAXINT
```

e.g. `CONSTANTS['ethereum'].ZERO // 115792089237316195423570985008687907853269984665640564039457584007913129639935`

### NATIVE

The address used to represent the native blockchain token alongside other token addresses.

```javascript
CONSTANTS[blockchain].NATIVE
```

e.g. `CONSTANTS['ethereum'].NATIVE // 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE`

### WRAPPED

The address of the token contract providing a wrapped token of individual blockchain's native token.

```javascript
CONSTANTS[blockchain].WRAPPED
```

e.g. `CONSTANTS['ethereum'].WRAPPED // 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2`


## Development

### Get started

```
yarn install
yarn start
```

### Release

```
npm publish
```
