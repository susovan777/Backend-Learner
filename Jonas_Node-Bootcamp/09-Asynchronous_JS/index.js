import fs from "fs";
import superagent from "superagent";

// __dirname is for commonJS, can't be used for ES module
fs.readFile(`dog.txt`, (err, data) => {
  console.log(`Breed: ${data}`);

  //   callback hell
  /* superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      if (err) return console.log(err.message);
      console.log(res.body);

      fs.writeFile("dog-img.txt", res.body.message, (err) => {
        if (err) return console.log(err.message);
        console.log("Random dog image saved!");
      });
    }); */

    // Using Promises
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      if (err) return console.log(err.message);
      console.log(res.body);

      fs.writeFile("dog-img.txt", res.body.message, (err) => {
        if (err) return console.log(err.message);
        console.log("Random dog image saved!");
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});
