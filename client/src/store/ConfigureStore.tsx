import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import categoryReducer, { ICategory } from "./categoryReducer";
import { User } from "../types/User.d";
import { IProduct } from "../types/product.d";

export const store=configureStore({
    reducer:{
        user:userReducer,
        products:productReducer,
        cart:cartReducer,
        category:categoryReducer
    }
})

export interface IStore{
    user:User,
    products:IProduct[],
    cart:IProduct[],
    category:ICategory[]
}