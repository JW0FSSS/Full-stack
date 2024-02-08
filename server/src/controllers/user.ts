import { Request, Response } from "express";
import { Login, Profile, Register } from "services/user";
import { UserLogin, UserRegister } from "types/user";
import { IRequest } from "middlewares/jsonwebtoken";

export async function UserRegisterController(req:Request,res:Response) {
    const {email,password,username,address,image,phoneNumber}:UserRegister=req.body

    const data= await Register({email,password,username,address,image,phoneNumber})

    res.json(data)
}

export async function UserLoginController(req:Request,res:Response) {
    const {email,password}:UserLogin=req.body

    const data= await Login({email,password})

    res.json(data)
}

export async function UserProfileController(req:IRequest,res:Response) {
    const id=req.id
    
    const data= await Profile({id:id||''})

    res.json(data)
}


