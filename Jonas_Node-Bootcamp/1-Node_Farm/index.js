// const fs = require("fs");
// fs.readFileSync(path[, options])
// ⭐ Blocking, Synchronous way ⭐
import { readFile, readFileSync, writeFile, writeFileSync } from "node:fs";
// reading from a file
const text = readFileSync("./txt/input.txt", "utf-8");
// console.log(text);

const textOutput = `This is what we know about Avocado: ${text}. \nCreated on ${Date.now()}`;
// writting to a file
// writeFileSync("./txt/output.txt", textOutput);
// console.log("File Written!");

// ⭐ Non-blocking, asynchronous way ⭐
readFile("./txt/start.txt", "utf-8", (error, data) => {
  readFile(`./txt/${data}.txt`, "utf-8", (error, data2) => {
    console.log(data2);
    readFile("./txt/append.txt", "utf-8", (error, data3) => {
      console.log(data3);
      writeFile("./txt/output.txt", `${data2}\n${data3}`, "utf-8", (error) => {
        console.log("File has been written!");
      });
    });
  });
});
console.log("Will read the file!");
