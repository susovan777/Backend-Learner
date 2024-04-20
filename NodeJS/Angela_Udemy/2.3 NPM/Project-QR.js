// using the inquirer package to get the user input
import inquirer from "inquirer";

// using qr-image package to turn the user entered url into a qr code image
import qr from "qr-image";

// fs is to create a new file
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type is your URL",
      name: "URL",
    },
  ])
  .then((answer) => {
    const url = answer.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    // crating a file to save the user URL
    fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((err) => {});
