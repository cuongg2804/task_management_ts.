import express, {Router}from "express";
const router :Router = express.Router();
import * as userValitdate from "../../validate/user.validate"; 
import * as controller from "../controller/user.controller";

// POST /v1/api/user/register
router.post("/register",userValitdate.register,controller.register);

// POST /v1/api/user/login

router.post("/login",userValitdate.login,controller.login);

export default router ;