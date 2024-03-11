const userDatas = require("../users.json");

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

  if (gender && age) {
    const result = userDatas.data.filter(
      (user) => user.gender === gender && user.dob.age >= age
    );
    res.json(result);
  } else if (gender) {
    const result = userDatas.data.filter((user) => user.gender === gender);
    res.json(result);
  } else if (age) {
    const result = userDatas.data.filter((user) => user.dob.age >= age);
    res.json(result);
  } else res.sendStatus(404);
};

module.exports = { getAllUsers, getUserByUuid, searchUsersByQuery };
