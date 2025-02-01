import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({})


const mongoURI=process.env.MONGO_URI;
if(!mongoURI)
{
    throw new Error("Database Link Not Found")
}


const db=async()=>{
    try{
        await mongoose.connect(mongoURI);
        console.log("Databse Connected")


    }
    catch(error)
    {
        console.error(error)
    }
}

export default db;