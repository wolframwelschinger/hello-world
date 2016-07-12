/*
Mein erstes Node.js-Skript
Autor:  Wolfram Welschinger
Datum:  10.07.2016
*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  /* Ausgaben mit Variablensubstitution werden mit Backticks eingeleitet und geschlossen */
  res.write('<h3>Test</h3>');
  res.end(`<p>Hello World! My server is running at http://${hostname}:${port}.</p>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
