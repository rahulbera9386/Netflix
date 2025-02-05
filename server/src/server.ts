import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import db from "./database/db";
import userRoutes from "./routes/auth.routes";
import movieRoutes from "./routes/movie.route"

dotenv.config({})

const app=express();
const PORT=process.env.PORT || 8000;


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:process.env.FRONTEND_URL,methods:["PUT","GET","UPDATE","POST"],allowedHeaders:["Content-Type","Authorization"],credentials:true}))


app.use("/api/auth",userRoutes);
app.use("/api/movie",movieRoutes);

app.get("/",(_,res)=>{
    res.send("Backend Running")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`)
    db()
})