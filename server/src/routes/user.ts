import { Router } from "express";
import { UserLoginController, UserProfileController, UserRegisterController } from "controllers/user";

export const user=Router()

user.post('/register',UserRegisterController)
user.post('/login',UserLoginController)
user.get('/profile',UserProfileController)
