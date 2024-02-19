import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import favoriteReducer from "./favoriteReducer";


const UserMiddleware =(store)=>(next)=>(action)=>{
    
    next(action)
    
    if (action.type=='users/setUser') {
        const newState=store.getState()
        const {image,username,jsonwebtoken:token} = newState.user
        localStorage.setItem('__user__',JSON.stringify({image,username}))
        localStorage.setItem('__token__',JSON.stringify({token}))
    }
}

const CartMiddleware =(store)=>(next)=>(action)=>{
    
    next(action)
    
    if (action.type=='cart/addCart'||'cart/removeCart'||'cart/removeOneCart') {
        const newState=store.getState()
        const cart = newState.cart
        localStorage.setItem('__cart__',JSON.stringify(cart))
    }
}

export const store=configureStore({
    reducer:{
        user:userReducer,
        products:productReducer,
        cart:cartReducer,
        category:categoryReducer,
        favorite:favoriteReducer
    },
    middleware:()=>[UserMiddleware,CartMiddleware]
})
export type IStore=ReturnType<typeof store.getState>
/* export interface IStore{
    user:User,
    products:IProduct[],
    cart:IProduct[],
    category:ICategory[]
} */