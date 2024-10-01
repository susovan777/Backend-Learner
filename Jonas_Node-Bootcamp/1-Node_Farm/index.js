//////////////////     FILE      ////////////////////////

// const fs = require("fs"); // for CJS
// fs.readFileSync(path[, options])
// ⭐ Blocking, Synchronous way ⭐
import { readFile, readFileSync, writeFile, writeFileSync } from "node:fs"; // for ESM
// reading from a file
const text = readFileSync("./txt/input.txt", "utf-8");
// console.log(text);

const textOutput = `This is what we know about Avocado: ${text}. \nCreated on ${Date.now()}`;
// writting to a file
// writeFileSync("./txt/output.txt", textOutput);
// console.log("File Written!");

// ⭐ Non-blocking, asynchronous way ⭐
// readFile("./txt/start.txt", "utf-8", (error, data) => {
//   readFile(`./txt/${data}.txt`, "utf-8", (error, data2) => {
//     console.log(data2);
//     readFile("./txt/append.txt", "utf-8", (error, data3) => {
//       console.log(data3);
//       writeFile("./txt/output.txt", `${data2}\n${data3}`, "utf-8", (error) => {
//         console.log("File has been written!");
//       });
//     });
//   });
// });
// console.log("Will read the file!");

// //////////////////////     SERVER     /////////////////////////////
import http from "node:http";
import url from "node:url";
import slugify from "slugify";

// Reading the data synchronously only once
const overview = readFileSync("./templates/overview.html", "utf-8");
const card = readFileSync("./templates/card.html", "utf-8");
const product = readFileSync("./templates/product.html", "utf-8");
const data = readFileSync("./dev-data/data.json", "utf-8");
const dataObject = JSON.parse(data); // json string to object

const replacetemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  return output;
};

// console.log(slugify("Fresh Avocados", { lower: true }));
const slugString = dataObject.map((item) =>
  slugify(item.productName, { lower: true })
);
console.log(slugString);

const server = http.createServer((req, res) => {
  // const pathname = req.url;
  console.log(req.url);
  // console.log(url.parse(req.url, true));
  const { query, pathname } = url.parse(req.url, true);
  // console.log(query, pathname);

  //   Overview Page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "content-type": "text/html" });

    const cardHtml = dataObject.map((el) => replacetemplate(card, el)).join("");
    const output = overview.replace("{%PRODUCT_CARD%}", cardHtml);
    res.end(output);
  }
  //   Product Page
  else if (pathname === "/product") {
    res.writeHead(200, { "content-type": "text/html" });
    const productData = dataObject[query.id];
    const output = replacetemplate(product, productData);
    res.end(output);
  }
  //   API Page
  else if (pathname === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  }
  //   Not Found Page
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(3000, () => {
  console.log("Listening to server at port 3000...");
});
