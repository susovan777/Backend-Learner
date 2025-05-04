import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
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

  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ['apple', 'banana', 'cherry'],
    htmlContent: "<em>This is some em text</em>"
  }

  res.render("exercise.ejs" , data)
});

app.listen(port, () => {
  console.log("Server running on the port", port);
});
