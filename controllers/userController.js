import { users } from "../models/userModel.js";

const getUser= (req, res)=> {
  res.send(users);
}

const postuser = (req, res)=> {
  res.send("This is post request of userRouter");
}

export{getUser,postuser};