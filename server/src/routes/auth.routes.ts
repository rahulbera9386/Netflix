import express from "express";
import { logOut, signIn, signUp } from "../controller/auth.controller";

const router=express.Router();



router.post("/signup",signUp)
router.post("/login",signIn)
router.post("/logout",logOut)


export default router;
