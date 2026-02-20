import express from "express";

const app = express();

app.use(express.json());

const jwt = Math.round(Math.random()*100000).toString();

const auth = (req, res, next) => {
  const token = req.headers.authorization; //Here you get ("Bearer 1234")
  const val = token.split(" "); //FOR SPLITING("Bearer","1234")

  if (val[1] === jwt) {
    next();
  } else {
    res.send("Access Denied");
  }
};

app.post("/login",(req,res)=>{
    res.send(jwt);
})

app.get("/",auth,(req,res)=>{
    res.send("wlc");
})

app.listen(8080, () => {
  console.log("Server running on port 8080");
});