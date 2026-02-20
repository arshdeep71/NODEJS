import express from "express";

const app = express()
app.listen(8080)


const logger = (req,res,next)=>{
    req.message = "This is logger function";
    // console.log(req.url);
    next()
}
// app.use(logger); 

app.get("/",logger,(req,res)=>{
    // app.use(logger);
    console.log(req.message);
    res.json(req.url);
 
})

app.get("/home",(req,res)=>{
    // res.end()
    // res.send("Hello world");
    // res.json({name:"Arsh",age:20})
    console.log(req.message);
    res.json(req.url);
 
})