# R.js Tests

A simple test suite demonstrating a bug in the `map` config when using r.js.

There are two test suites in `/tests` - one runs requireJS, the other runs an optimized build
with r.js. The r.js build fails to respect the `map` config. You will only see a timeout in the
console due to a QUnit deficiency; if you want to see the error, open `index-rjs.html` and view 
the console.

Run: 

```bash
npm install
./test.sh
```