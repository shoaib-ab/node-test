//! Modules
// Node uses CommonJs module system (in which every file is a module bydefault)
// module - encapsulated code (only share minimum)

// sayHi(shoaib);

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

// console.log(names);
// sayHi(names.shoaib);
