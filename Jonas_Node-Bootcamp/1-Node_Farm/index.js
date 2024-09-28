// const fs = require("fs");
import { readFileSync } from "node:fs";

// fs.readFileSync(path[, options])
const text = readFileSync("./txt/input.txt", "utf-8");
console.log(text);
