const userDatas = require("../users.json");
// adding Joi validator
const joi = require("joi");
// creating joi schema
const schema = joi
  .object()
  .keys({
    // age should be a number and integer
    gender: joi.string().valid("male", "female"),
    age: joi.number().integer().min(0).max(100),
  }) // specifying atleast one of the key shoud be present
  .or("gender", "age"); 

const getAllUsers = (req, res) => {
  console.log("Current path: /users");
  res.json(userDatas.data);
};

const getUserByUuid = (req, res) => {
  const uuid = req.params.uuid;
  console.log("Current path: /uuid and uuid:", uuid);

  const result = userDatas.data.find((ele) => ele.login.uuid === uuid);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
};

const searchUsersByQuery = (req, res) => {
  const gender = req.query.gender;
  const age = req.query.age;
  console.log(`Current path: /search where age: ${age} and gender: ${gender}`);

  // adding validation using joi
  const result = schema.validate({ gender, age });
  if (result.error) {
    return res.status(422).json(result.error);
  }

  // removed the manual validation
  /* if (!age && !gender) {
    res.status(422).json({
      message: "Missing Search Parameters, search using age and/or gender",
    });
  } else  */ if (gender && age) {
    const result = userDatas.data.filter(
      (user) => user.gender === gender && user.dob.age >= age
    );
    res.json(result);
  } else if (gender) {
    /* if (!["male", "female"].includes(gender.toLowerCase())) {
      res
        .status(422)
        .json({ message: "Gender to search can either be 'male' or 'female'" });
    } else {
    } */
    const result = userDatas.data.filter((user) => user.gender === gender);
    res.json(result);
  } else if (age) {
    /* if (!Number(age)) {
      res.status(422).json({ message: "Age parameter should be a number" });
    } else if (age < 0 || age > 100) {
      res.status(422).json({
        message: "Age out of bounds. It should be a number between 0 and 100",
      });
    } else {
    } */
    const result = userDatas.data.filter((user) => user.dob.age >= age);
    res.json(result);
  } else res.sendStatus(404);
};

module.exports = { getAllUsers, getUserByUuid, searchUsersByQuery };
