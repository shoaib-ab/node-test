const path = require('path');

console.log(`path separator for my platform: ${path.sep}`);

const filePath = path.join('/content', 'subfolder', 'test.txt');

console.log(`file path: ${filePath}`);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
