import { Request, Response } from "express";
import { User } from "../models/user.model";
import bcrypt from "bcryptjs"


export const signUp=async(req:Request,res:Response):Promise<void>=>{
    try{
        const {username,email,password}=req.body;
        if(!username || !email || !password)
        {
            res.status(500).json({message:"Please fill all the fields",success:false,error:true})
            return
        }
        const existingUser=await User.findOne({email});
        if(existingUser)
        {
            res.status(500).json({message:"Email id already registered",success:false,error:true});
            return
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const user=new User({
            username,email,password:hashedPassword
        })
        await user.save();
        res.status(200).json({message:"Signup Success",error:false,success:true})
        

    }
    catch(error)
    {
        console.error(error)
        res.status(500).json({message:"Error while signing up",success:false,error:true})
    }

}


export const signIn=async(req:Request,res:Response):Promise<void>=>{
    try{

    }
    catch(error)
    {
        console.error(error)
        res.status(500).json({message:"Error while Login",success:false,error:true})
    }

}

export const logOut=async(req:Request,res:Response):Promise<void>=>{
    try{

    }
    catch(error)
    {
        console.error(error)
        res.status(500).json({message:"Error while Logout",success:false,error:true})
    }
}