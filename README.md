# legacy-dynamic-import-plugin
make the dynamic import of the commonjs  in webpack@4+ works like previous versions.

## Usage


```js
// in webpack.conf.js
new LegacyDanamicImportPlugin([
  '/somepath1/foo',
]);
```

```js
// in somepath1/foo.js
module.exports = () => {
}
```

```js
// where you dynamic import foo.js
import('./somepath1/foo')
  .then(exports => {
    // do your stuff
  })
```
