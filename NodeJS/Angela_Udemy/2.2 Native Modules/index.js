// using node module for file sysyem
const fs = require("fs");

// creating a file using node fs module
fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

// reading content of a file
fs.readFile("./message.txt", 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
