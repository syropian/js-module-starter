# js-module-starter

[![Build Status](https://travis-ci.org/syropian/js-module-starter.svg?branch=master)](https://travis-ci.org/syropian/js-module-starter)

> A simple boilerplate for quickly creating an open-source JS module.

## Install

```
$ yarn add js-module-starter
```

or

```
$ npm install js-module-starter --save
```

**or** include the UMD build, hosted by [unpkg](https://unpkg.com) in a `<script>` tag.

```js
<script src="//unpkg.com/js-module-starter/dist/my-module.min.js" />
```

## Usage

```js
// ES6
import summify from "js-module-starter"
const sum = {{ Name }}(6, 4)
console.log(sum) // returns 10
```

```js
// Browser (include the UMD build in a <script> tag as shown above)
const Summify = window.MyModule
const sum = Summify(5, 3)
console.log(sum) // returns 8
```

## API

### myModule(first, second)

#### first

Type: `integer`

Default: `0`

The first number you want to add.

#### second

Type: `integer`

Default: `0`

The second number you want to add.

## Development

```bash
# To run the tests
$ npm test
# or
$ npm run test:watch

# To publish the dist files
$ npm run build
```

## License

MIT © [Collin Henderson](https://github.com/syropian)
