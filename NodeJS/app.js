// Creating a server using NodeJS

const http = require("http");
const port = 8081;

const server = http.createServer((request, response) => {
  // set response status code and response header
  response.writeHead(200, { "Content-type": "text/html" });

  // set response body i.e. data to be send
  response.write("<h1>My Server</h1>");
  response.write("<p>Created by Susovan in <b>Local machine</b></p>");

  // tell the server that reposnse is complete and close the server
  response.end();
});

server.listen(port, () => {
    console.log(`NodeJS server started at the port ${port}`);
})
