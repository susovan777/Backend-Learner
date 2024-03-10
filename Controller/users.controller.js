const userDatas = require("../users.json");

const getAllUsers = (req, res) => {
  console.log("Current path: /users");
  res.json(userDatas);
};

const getUserByUuid = (req, res) => {
    const uuid = req.params.uuid;
    console.log("Current path: /uuid and uuid:", uuid);
    
    const result = userDatas.data.find(ele => ele.login.uuid === uuid)
    if(result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }
}

module.exports = { getAllUsers, getUserByUuid };
