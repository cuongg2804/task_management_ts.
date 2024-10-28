import User from "../model/user.models";
import md5 from "md5";
import * as  generateRandom  from "../../helper/generateRandom.helper";
import { Request,Response } from "express";


export const register = async (req: Request, res : Response) : Promise<void> =>{
    const inforUser = {
        fullName:  req.body.fullName ,
        email: req.body.email,
        password:md5(req.body.password),
        tokenUser: generateRandom.generateRandomString(30),
    }

    const newUser = new User(inforUser);
    await newUser.save();
    
    res.json({
        code : 200,
        message : "Đăng ký tài khoản thành công !"
    })
}

// [POST] /v1/api/user/login
export const login =  async (req: Request, res : Response) : Promise<void>  =>{
    const exsitEmail = await User.findOne({
        email : req.body.email,
    })
    if(!exsitEmail){
        res.json({
            code : 400,
            message : "Email không tồn tại !"
        })
        return ;
    }
    if(md5(req.body.password) != exsitEmail.password){
        res.json({
            code : 400,
            message : "Sai mật khẩu!"
        })
        return ;
    }
    const token = exsitEmail.tokenUser; 
    res.json({
        code : 200,
        token : token,
        message : "Đăng nhập thành công !"
    })
}