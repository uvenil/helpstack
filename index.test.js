const package = 'helpstack';

const hs = require('./index');
const c = { "a": 2 };

// Aufruf
const res = hs(c)
const check = '> {"a":2} < helpstack/index.test.js:7:13 < cjs/loader.js:678:30';

// Test
console.log('--- Start tests');
if (res == check) {
  console.log(`${package} ok.`);
} else {
  throw new Error(`${package} funktioniert nicht!`);
};
console.log('--- End tests');
