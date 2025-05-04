import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  // 👽 Practice Code 👽
  /* const today = new Date();
  const day = today.getDay()

  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "a weekend";
    adv = "it's time to have some fun"
  }
  
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  }); */

  // ------------ 👽 First Exercise 👽 --------------
  /* const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ['apple', 'banana', 'cherry'],
    htmlContent: "<em>This is some em text</em>"
  }

  res.render("exercise1.ejs" , data)
   */

  // ------------ 👽 Second Exercise 👽 --------------
  res.render("exercise2.ejs");
});

app.post("/submit", (req, res) => {
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  // console.log(numLetters);
  res.render("exercise2.ejs", { numOfLetters: numLetters });
});

app.listen(port, () => {
  console.log("Server running on the port", port);
});
