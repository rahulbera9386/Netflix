import { Request, Response } from "express";
import { User } from "../models/user.model";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const generateToken=(email:string)=>{
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }
    const token=jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"1h"})
    return token;
}




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
        const {email,password}=req.body;
        if(!email || !password)
        {
            res.status(401).json({message:"Please Fill all the field",success:false,error:true})
            return
        }
        const user=await User.findOne({email});
        if(!user)
        {
            res.status(400).json({message:"User Not Found",success:false,error:true})
            return

        }
        const passwordCorrect=await bcrypt.compare(password,user.password!);
        if(!passwordCorrect)
        {
            res.status(400).json({message:"Password Not Correct",success:false,error:true})
            return 

        }
       
        const token=generateToken(email);
        //console.log(token)
        res.cookie("netflix-token",token,{
            httpOnly:true,
            
            secure:process.env.NODE_ENV==="production",
            sameSite:"strict",
            maxAge:60*60*60*60*1000

        }).status(200).json({message:"Login Success",success:true,error:false,data:{
            username:user.username,
            email:user.email
        }})

    }
    catch(error)
    {
        console.error(error)
        res.status(500).json({message:"Error while Login",success:false,error:true})
    }

}

export const logOut=async(req:Request,res:Response):Promise<void>=>{
    try{
        res.clearCookie("netflix-token")
        res.status(200).json({message:"Successfully logout",success:true,error:false})

    }
    catch(error)
    {
        console.error(error)
        res.status(500).json({message:"Error while Logout",success:false,error:true})
    }
}