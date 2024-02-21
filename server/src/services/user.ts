import { UserRegister,UserLogin } from "../types/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { FavoriteModel } from "schemas/Favorites";
import { UserModel } from "schemas/User";

export async function Register({email,password,username,address,phoneNumber,image}:UserRegister) {
    try {
        const user =await UserModel.findOne({email})

        if (user) return {error:'email is already used'}

        const nickname =await UserModel.findOne({username})

        if (nickname) return {error:'nickname is already used'}

        const passwordEncrypt= await bcrypt.hash(password,10)
        
        const newUser= new UserModel({
            email,
            username,
            password:passwordEncrypt,
            image:image||'',
            address:address||{street:'',city:'',state:''},
            phoneNumber:phoneNumber||'',
        })

        await newUser.save()

        await FavoriteModel.create({user_id:newUser._id,product_id:[]})

        return {message:'user created succesfully'}
    } catch (error) {
        throw new Error(`error : ${error}`);
    }    
}

export async function Login({email,password}:UserLogin) {
    try {

        const user =await UserModel.findOne({email}).select('image username password')

        if (!user) return {error:'email or password are incorrects'}

        const VerifyPassword= await bcrypt.compare(password,user.password)

        if (!VerifyPassword) return {error:'email or password are incorrects'}

        const jsonwebtoken=await jwt.sign({id:user._id},process.env.JWT_ENCODED||'holaa',{algorithm:'HS256',expiresIn:'3h'})

        return {token:jsonwebtoken,image:user.image,username:user.username}

    } catch (error) {
        throw new Error(`error : ${error}`);
    }    
}

export async function Profile({id}:{id:string}) {
    try {

        const user =await UserModel.findById({_id:id}).select('email username address image phoneNumber')

        if (!user) return {error:'forbidden'}

        return user

    } catch (error) {
        throw new Error(`error : ${error}`);
    }    
}

