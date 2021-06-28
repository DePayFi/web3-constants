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
CONSTANTS['ethereum'].WRAPPED  // '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'

CONSTANTS['bsc'].ZERO  // '0x0000000000000000000000000000000000000000'
CONSTANTS['bsc'].MAXINT  // '115792089237316195423570985008687907853269984665640564039457584007913129639935'
CONSTANTS['bsc'].WRAPPED  // '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
```

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
