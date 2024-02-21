import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface IPayload {
    id: string;
    iat: number;
} 
export interface IRequest extends Request{
    id?:string
} 

export async function VerifyJwt(req:IRequest,res:Response,next:NextFunction) {
    try {
        const header=req.headers.authorization

        const token=header?.split(' ')[1]

    
        const payload= await jwt.verify(token||'',process.env.JWT_ENCODED||'holaa') as IPayload
        
        if (!payload) return res.send({error:'user prohibided'}).status(303)
            
        req.id=payload.id
        
        next()
    } catch (error) {
        res.status(403).json({error:'Token expired or incorrect'})
    }
}