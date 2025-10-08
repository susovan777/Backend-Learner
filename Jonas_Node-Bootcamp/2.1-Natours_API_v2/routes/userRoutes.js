import express from "express";
import {
  getUser,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.param('id', (req, res, next, val) => {
  console.log(`User id is ${val}`);
  next();
})

userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export { userRouter };
