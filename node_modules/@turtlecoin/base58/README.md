![image](https://user-images.githubusercontent.com/34389545/35821974-62e0e25c-0a70-11e8-87dd-2cfffeb6ed47.png)

# TurtleCoin Base58 Helper

![Prerequisite](https://img.shields.io/badge/node-%3E%3D12-blue.svg) [![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/TurtleCoin/node-turtlecoin-base58#readme) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/TurtleCoin/node-turtlecoin-base58/graphs/commit-activity) [![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-yellow.svg)](https://github.com/TurtleCoin/node-turtlecoin-base58/blob/master/LICENSE) [![Twitter: TurtlePay](https://img.shields.io/twitter/follow/_TurtleCoin.svg?style=social)](https://twitter.com/_TurtleCoin)

[![NPM](https://nodeico.herokuapp.com/@turtlecoin/base58.svg)](https://npmjs.com/package/@turtlecoin/base58)

This package contains the code paths necessary to encode and/or decode hexadecimal strings to Base58 encoding and back again.

## Installation

```bash
npm install @turtlecoin/base58
```

## Initialization

### TypeScript

```typescript
import { Base58 } from '@turtlecoin/base58'

const rawAddress = Base58.decode('TRTLv3JRA772aBveLkCjG5jDvoUdKwa8YDsgLxCczL1oPei42XAMLE5QLRHM2c8oo5WbwLiB5ky7mDP7WGB53Jnp2ygHEomu3qa')

const address = Base58.encode(rawAddress)
```

### JavaScript

```javascript
const Base58 = require('@turtlecoin/base58').Base58

const rawAddress = Base58.decode('TRTLv3JRA772aBveLkCjG5jDvoUdKwa8YDsgLxCczL1oPei42XAMLE5QLRHM2c8oo5WbwLiB5ky7mDP7WGB53Jnp2ygHEomu3qa')

const address = Base58.encode(rawAddress)
```

### Documentation

You can find the full documentation for this library [here](https://base58.turtlecoin.dev)
