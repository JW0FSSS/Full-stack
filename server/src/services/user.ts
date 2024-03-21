import { UserRegister,UserLogin } from "../types/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { FavoriteModel } from "schemas/relations";
import { UserModel } from "schemas/relations";

export async function Register({email,password,username,address,phoneNumber,image}:UserRegister) {
    try {
        const user =await UserModel.findOne({where:{email}})

        if (user) return {error:'email is already used'}

        const nickname =await UserModel.findOne({where:{username}})

        if (nickname) return {error:'nickname is already used'}

        const passwordEncrypt= await bcrypt.hash(password,10)
        
        await UserModel.create({
            email,
            username,
            password:passwordEncrypt,
            image:image||'',
            address:address||{street:'',city:'',state:''},
            phoneNumber:phoneNumber||'',
        })

        return {message:'user created succesfully'}
    } catch (error) {
        throw new Error(`error : ${error}`);
    }    
}

export async function Login({email,password}:UserLogin) {
    try {

        const user =await UserModel.findOne({where:{email},attributes:['image', 'username' ,'password']})

        if (!user) return {error:'email or password are incorrects'}
        const parseUser=user.toJSON()
        const VerifyPassword= await bcrypt.compare(password,parseUser.password)

        if (!VerifyPassword) return {error:'email or password are incorrects'}

        const jsonwebtoken=await jwt.sign({id:parseUser.id},process.env.JWT_ENCODED||'holaa',{algorithm:'HS256',expiresIn:'3h'})

        return {token:jsonwebtoken,image:parseUser.image,username:parseUser.username}

    } catch (error) {
        throw new Error(`error : ${error}`);
    }    
}

export async function Profile({id}:{id:string}) {
    try {

        const user =await UserModel.findByPk(id)
        if (!user) return {error:'forbidden'}

        return user

    } catch (error) {
        throw new Error(`error : ${error}`);
    }    
}

