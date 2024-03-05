const http = require("http");
const { stringify } = require("querystring");
const port = 8081;

const server = http.createServer((request, response) => {
  // request object is a readbleStream
  const { headers, method, url } = request;

  let body = [];

  // request body
  request
    .on("error", (err) => {
      console.log(err);
    })
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();

      // response object is a writableStream
      response.on("error", (err) => {
        console.log(err);
      });

      response.statusCode = 200;
      response.setHeader("Content-Type", "application/json");
      // same as above, response.writeHead(200, {'Content-Type': 'application/json'})

      const responseBody = { headers, method, url, body };
      response.write(JSON.stringify(responseBody));
      response.end();
      // same as above 2 lines, response.end(JSON.stringify(responseBody))
    });
});

server.listen(port, () => {
  console.log(`A new NodeJS server started at the port ${port}`);
});
