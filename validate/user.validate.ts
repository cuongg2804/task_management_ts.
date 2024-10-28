import User from "../ver1/model/user.models";
import forgotPassword from "../ver1/model/forgot-password.model";
import {Request, Response, NextFunction} from "express";

export const register = async (req : Request, res :Response, next :NextFunction) :Promise<void> =>{
    if(!req.body.fullName || req.body.fullName.length < 8){
        res.json({
            code : 400,
            message : "Name require not null"
        })
        return;
    }
    if(!req.body.email.includes("@gmail.com") || !req.body.email){
        res.json({
            code : 400,
            message : "Email is incorrect"
        })
        return;
    }
    if(!req.body.password || req.body.password.length < 3){
        res.json({
            code : 400,
            message : "Password is incorrect!"
        })
        return;
    }
    const exsitEmail = await User.findOne({
        email : req.body.email,
    })

    if(exsitEmail){
        res.json({
            code : 400,
            message : "Email has been exsit !"
        })
        return;
    }
 
    next();
}


export const login = async (req : Request, res :Response, next :NextFunction):Promise<void>  =>{
    if(!req.body.email.includes("@gmail.com") || !req.body.email){
        res.json({
            code : 400,
            message : "Email is incorrect"
        })
        return;
    }
    if(!req.body.password || req.body.password.length < 3){
        res.json({
            code : 400,
            message : "Password is incorrect!"
        })
        return;
    }
 
    next();
}


export const forgot = async(req : Request, res :Response, next :NextFunction):Promise<void> =>{
    if(!req.body.email.includes("@gmail.com") || !req.body.email){
        res.json({
            code : 400,
            message : "Email is incorrect"
        })
        return;
    }
    const exsitEmail = await User.findOne({
        email : req.body.email,
    })
    if(!exsitEmail){
        res.json({
            code : 400,
            message : "Email hasn't been exsit !"
        })
        return;
    }

    const forgot_password = await forgotPassword.findOne({
        email : req.body.email,
    })
    if(forgot_password){
        res.json({
            code : 400,
            message : "OTP hasn't been tranfer !"
        })
        return;
    }
    next();
}