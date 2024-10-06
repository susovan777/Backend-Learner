import dotenv from "dotenv";
import { app } from "./index.js";

dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

// console.log(app.get("env")); // developement
// console.log(process.env);

app.listen(port, () => {
  console.log(`Listening to the server at port ${port}...`);
});
