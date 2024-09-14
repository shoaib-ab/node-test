const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end(`
   <h1>Hllo there and welcome to home page</h1>
   `);
    return;
  }
  if (req.url == '/about') {
    res.end('We are providing backend web development services.');
    return;
  }
  res.end(`
<h1>Oops! we are unable to find the page you are requesting for!</h1>

<a href="/">back to home</a>
 `);
});

server.listen(5000);
