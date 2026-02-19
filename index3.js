import express from "express";

const app = express()
app.listen(8080,()=>{
    console.log("Server Started");
});
app.get("/",(req,res)=>{
    console.log(req.url);
    res.send("Response from server /");
})
app.get("/home",(req,res)=>{
    console.log(req.url);
    res.send("Response from /home");
})
app.get("/home/page1",(req,res)=>{
    console.log(req.url);
    res.send("Response from /home/page1");
})