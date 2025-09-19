const fs = require("fs");

// Blocking code execution
const input = fs.readFileSync("input.txt", "utf-8");
// console.log(input);
const textOutput = `${input} \nToday is ${new Date()}, it's an amazing day!`
fs.writeFileSync("output.txt", textOutput)
console.log("File written! ✅");


// Non-blocking code execution
// fs.readFile("input.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
// console.log("Reading file...");

////////////////////////////////////////////////////////////////////////


