import express from "express";

const app = express();
app.listen(8080, ()=>console.log("Server Started"));

app.use("/images",express.static("images"))