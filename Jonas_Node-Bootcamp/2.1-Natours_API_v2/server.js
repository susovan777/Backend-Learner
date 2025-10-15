import { app } from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
const DB_ = process.env.DATABASE_LOCAL

mongoose.connect(DB).then(() => {
  // console.log(con.connections);
  console.log("DB connection successful!");
});

// 🧪 Tour Model Testing
/* const testTour = new Tour({
  name: "The forest camper",
  rating: 4.7,
  price: 530,
});

testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => console.log('Error:', err.message));
 */
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening to the server at", port);
});
