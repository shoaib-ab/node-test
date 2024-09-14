// mpm -- node package manger

// npm comes with node

// node -v (check the node version)
// npm --version (check the npm version)

// local dependecy - use it only in this particular project
// npm i <packageName>

// global dependecy - use it in any project
// npm install -g <packageName>

//! package.json - manifest file(store importatn info about the project/package)
// manual approach (create package.json in root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (picks up everything by default)

// Why we need package.json - becuase we need to provide information about our project.

const _ = require('lodash');

const items = [1, [2, [3, [4, [5, [6]]]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
