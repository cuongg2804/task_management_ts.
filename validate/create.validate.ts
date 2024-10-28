import {Request, Response, NextFunction} from "express";
export const validateCreate =  (req : Request, res :Response, next :NextFunction) :Promise<void> => {
    if(!req.body.title){
        res.json({
            code : 400,
            message : "Title require not null"
        })
        return;
    }
    if(!req.body.status){
        res.json({
            code : 400,
            message : "Status require not null"
        })
        return;
    }
  next();
}