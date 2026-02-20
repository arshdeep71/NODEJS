import express from "express";

const app = express();

app.use(express.json());

const auth = (req, res, next) => {
    if (req.body.email === "john@gmail.com"&& req.body.password === "1234") {
        next();
    } else {
        res.send("Access Denied");
    }
};

app.post("/ok", auth, (req, res) => {
    res.send("Welcome");
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});