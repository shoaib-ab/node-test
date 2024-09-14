const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/result-sync2.txt',
      `Here is the result of merging two files: \n first: ${first} and second: ${second}`,
      { flag: 'a' },
      (err, result) => {
        if (err) {
          console.log(err);
          return err;
        }
        console.log(result);
      }
    );
  });
});
