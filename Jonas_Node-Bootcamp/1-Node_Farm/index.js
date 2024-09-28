// const fs = require("fs");
// fs.readFileSync(path[, options])
import { readFileSync, writeFileSync } from "node:fs";

// reading from a file
const text = readFileSync("./txt/input.txt", "utf-8");
console.log(text);

const textOutput = `This is what we know about Avocado: ${text}. \nCreated on ${Date.now()}`;

// writting to a file
writeFileSync("./txt/output.txt", textOutput);
console.log("File Written!");
