# es6req

Minimal ES6 require. Exposes `module.default` (ES6 default export) if found, or just regular `module.exports`

## Install

```
npm install es6req
```

## Usage

```
import require from 'es6req'

const module = require(`./es6-or-regular-module`)
```