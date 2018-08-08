# Crypty

A super simple (but secure) encryption and decryption of text using `aes-256-cbc` algorithm with a 32 bytes secret.

## Important

By design the hash doesn't change at every encryptation, so don't use this lib to encrypt passwords.

[![Build Status](https://travis-ci.org/sebas5384/crypty.svg?branch=master)](https://travis-ci.org/sebas5384/crypty)
[![sponsored by Taller](https://raw.githubusercontent.com/TallerWebSolutions/tallerwebsolutions.github.io/master/sponsored-by-taller.png)](https://taller.net.br/en/)

---

## Install

```
npm i crypty
```

or

```
yarn add crypty
```

## Usage

```js
import { encrypt, decrypt } from 'crypty'

// Your secret must have 32 bytes.
const secret = 'P10PJY1ckcMEeZxWHfVzsiOktuXf8O8O'

const hash = encrypt('my text', secret)
// => 46e2a7e3214f127c198247332cdc89ce

const text = decrypt(hash, secret)
// => 'my text'
```
