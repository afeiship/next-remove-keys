# next-remove-keys
> Remove keys from array/object.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
yarn add @jswork/next-remove-keys
```

## usage
```js
import '@jswork/next-remove-keys';

const obj = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  phone: {
    home: "555-555-1234",
    work: "555-555-5678",
  },
};

nx.removeKeys(obj, {
  keys: ["address.zip", "work"],
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-remove-keys/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-remove-keys
[version-url]: https://npmjs.org/package/@jswork/next-remove-keys

[license-image]: https://img.shields.io/npm/l/@jswork/next-remove-keys
[license-url]: https://github.com/afeiship/next-remove-keys/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-remove-keys
[size-url]: https://github.com/afeiship/next-remove-keys/blob/master/dist/next-remove-keys.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-remove-keys
[download-url]: https://www.npmjs.com/package/@jswork/next-remove-keys
