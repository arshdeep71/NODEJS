import express from "express";
import { getUser, postuser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.post("/", postuser);

export default userRouter;