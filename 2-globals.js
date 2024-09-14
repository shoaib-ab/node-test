// Globals (becuase Node has no window object)
// ! no browser no window objectFit:

// __dirname  - path to current directory
// __filename - file name
// require - function to use module (CommonJS)
// module - info about current module (file)
// procees - info about env where program is being executed

console.log('current directory namne: ', __dirname);

// setInterval(() => {
//   console.log('Hello world!');
// }, 1000);

setTimeout(() => {
  console.log('Hello world!');
  setTimeout(() => {
    console.log('Hello world2!');
  }, 1000);
}, 1000);

console.log('after setTimeout');
