import express from "express";

const app = express();

const auth = (req, res, next) => {
  if (req.path === "/1234") {
    next(); 
  } else {
    res.send("Access Denied");
  }
};
app.use(auth);

app.get("/1234", (req, res) => {
  res.send("Welcome");
});

app.listen(8080);