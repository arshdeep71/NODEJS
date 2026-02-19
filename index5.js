import express from "express";

const app = express()
app.listen(8080,()=>{
    console.log("Server Started");
});


app.get("/:id1/:id2",(req,res)=>{
    console.log(req.params);
    res.send(Number(req.params.id1)+Number(req.params.id2));
});

app.get("/x/:id1/y/:id2/z/:id3",(req,res)=>{
    console.log(req.params);
    res.send(Number(req.params.id1)+Number(req.params.id2)+Number(req.params.id3));
});


app.get("/a/b/c/d",(req,res)=>{
    console.log(req.params);
    res.send("Hello Students");
});
