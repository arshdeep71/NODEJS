import express from "express";
import jwt from "jsonwebtoken";

const SECRET = "lpu";
const app = express();
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzNDIwMCwiZXhwIjoxNzcxODM3ODAwfQ.fmULqmXyzJjgvesj1cyfnRmJMRVwFJg76N4i8wCSS7c"
const user = jwt.verify(token, SECRET);
console.log(user);