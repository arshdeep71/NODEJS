import express from "express";

const app = express()
app.listen(8080,()=>{
    console.log("Server Started");
});
app.get("/home",(req,res)=>{
    console.log(req.url);
    res.send("You are redirected to home");
})