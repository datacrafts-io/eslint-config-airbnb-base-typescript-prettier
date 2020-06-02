# eslint-config-airbnb-base-typescript-prettier

[![npm version][npm-image]][npm-url]
![License][license]

Airbnb's **base** ESLint config with TypeScript and Prettier support.

[Always up-to-date](https://github.com/wei/pull) with it's
[upstream](https://github.com/toshi-toma/eslint-config-airbnb-typescript-prettier).

# How to use
Install `typescript`, `eslint` and `prettier`, `eslint-config-airbnb-base-typescript-prettier` and put it into your `.eslintrc.js`.

```bash
$ npm install typescript@3.7.3 eslint@^6.8.0 prettier@^1.18.2 eslint-config-airbnb-base-typescript-prettier --save-dev
```

`.eslintrc.js`

```js
module.exports = {
  extends: "airbnb-base-typescript-prettier"
};
```

## License

Open source [licensed as MIT](https://github.com/datacrafts-io/eslint-config-airbnb-base-typescript-prettier/blob/master/LICENSE).

[npm-image]: https://img.shields.io/npm/v/eslint-config-airbnb-base-typescript-prettier.svg
[npm-url]: https://npmjs.org/package/eslint-config-airbnb-base-typescript-prettier
[license]: https://img.shields.io/npm/l/eslint-config-airbnb-base-typescript-prettier.svg
