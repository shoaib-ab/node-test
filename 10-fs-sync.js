const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log('text in first file:\n', first);
console.log('text in second file:\n', second);

writeFileSync(
  './content/result-sync.txt',
  `Merging first.txt and second.txt:\n ${first} \n ${second}`,
  { flag: 'a' }
);
