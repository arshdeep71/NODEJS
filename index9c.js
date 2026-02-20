import express from "express";

const app = express();

app.use(express.json());

const auth = (req, res, next) => {
  const token = req.headers.authorization; // "Bearer 1234"
  const val = token.split(" "); // ["Bearer", "1234"]

  if (val[1] === "1234") {
    next();
  } else {
    res.send("Access Denied");
  }
};

app.post("/", auth, (req, res) => {
  res.send("Welcome");
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});