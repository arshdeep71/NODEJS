import express from "express";

const app = express();
app.listen(8080, ()=>console.log("Server Started"));


const userRouter = express.Router();
const productRouter = express.Router();


userRouter.get("/",(req,res)=>{
    res.send("This is get request of userRouter");
})

userRouter.post("/",(req,res)=>{
    res.send("This is post request of userRouter");
})



productRouter.get("/",(req,res)=>{
    res.send("This is get request of productRouter");
})

productRouter.post("/",(req,res)=>{
    res.send("This is post request of productRouter");
})

app.use("/api/users",userRouter);
app.use("/api/products",productRouter);
