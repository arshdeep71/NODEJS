import express from "express";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(8080, () => console.log("Server Started"));