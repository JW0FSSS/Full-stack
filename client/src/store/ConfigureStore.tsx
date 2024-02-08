import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import { UserRegister } from "../types/User.d";
import { IProduct } from "../types/product.d";

export const store=configureStore({
    reducer:{
        user:userReducer,
        products:productReducer,
        cart:cartReducer
    }
})

export interface IStore{
    user:UserRegister,
    products:IProduct[],
    cart:[],
}