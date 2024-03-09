// Creating a server using NodeJS

const http = require("http");
const port = 8081;

const server = http.createServer((request, response) => {
  const serverInfo = {
    serverName: "my server",
    version: "1.0.0",
    currentDate: new Date().toLocaleDateString(),
    currentTime: new Date().toLocaleTimeString()
  }

  // set response status code and response header
  // response.writeHead(200, { "Content-type": "text/html" });
  response.writeHead(200, { "Content-type": "application/json" });

  // set response body i.e. data to be send
  // response.write("<h1>My Server</h1>");
  // response.write("<p>Created by Susovan in <b>Local machine</b></p>");
  response.write(JSON.stringify(serverInfo));

  // tell the server that reposnse is complete and close the server
  response.end();
});

server.listen(port, () => {
    console.log(`NodeJS server started at the port ${port}`);
})
