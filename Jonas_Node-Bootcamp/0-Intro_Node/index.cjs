const fs = require("fs");

// Blocking code execution
const input = fs.readFileSync("input.txt", "utf-8");
// console.log(input);
const textOutput = `${input} \nToday is ${new Date()}, it's an amazing day!`;
// fs.writeFileSync("output.txt", textOutput)
// console.log("File written! ✅");

// Non-blocking code execution
// fs.readFile("input.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// console.log("Reading file...");

////////////////////////////////////////////////////////////////////////

const http = require("http");

const data = fs.readFileSync(`${__dirname}/../1-Node_Farm/dev-data/data.json`);
// const objectData = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") res.end("This is OVERVIEW");
  else if (pathName === "/product") res.end("This is PRODUCT");
  else if (pathName === "/api") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);

    // res.end("Api");
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }

  //   res.end("Hello, from server!");
});

server.listen(8080, () => {
  console.log("Listening to server on port 8080...");
});
