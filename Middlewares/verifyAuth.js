require("dotenv").config();
const Password = process.env.ROUTE_PASSWORD; //using environment variable

const verifyAuth = (req, res, next) => {
  // use the Headers in Postman to add key-value as Authorization-LetMeIn
  const authorization = req.headers["authorization"];
  console.log(authorization);
  if (!authorization || authorization !== Password) {
    return res.status(403).json({ message: "Unauthorized request" });
  }

  // passes the request to next object in line
  next(); 
};

module.exports = verifyAuth;
