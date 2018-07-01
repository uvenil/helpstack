const package = 'helpstack';

const hs = require('./index');
const c = { "a": 2 };

// Aufruf
const res = hs(c)
const helpstr = '\u001b[35m> \u001b[1m{\"a\":2}\u001b[2m < helpstack/index.test.js:7:13 < cjs/loader.js:678:30\u001b[0m';

// Test
console.log('--- Start tests');
if (res == helpstr) {
  console.log(`${package} ok.`);
} else {
  throw new Error(`${package} funktioniert nicht!`);
};
console.log('--- End tests');
