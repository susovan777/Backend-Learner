// console.log("Server started");
// console.log("Hello from server");
// console.log("Hello from server after installed nodemon");
// console.log("nodemon working fine!");

const http = require("http");
const port = 8081;

const server = http.createServer((req, res) => {
  const serverInfo = {
    serverName: "My Server",
    version: "1.0.0",
    currentDate: new Date().toLocaleDateString(),
    currentTime: new Date().toLocaleTimeString(),
  };

  if (req.url === "/status") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(JSON.stringify(serverInfo));
    res.end();
  } else {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>This is Homepage</h1>");
    res.end();
  }
});

server.listen(port, () => {
  console.log("HTTP server started...");
});
