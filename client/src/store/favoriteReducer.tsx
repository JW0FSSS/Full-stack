import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../types/product.d";

const initialState:IProduct[]=(()=>{
    const favoritePersist=localStorage.getItem('__favorite__')
    return favoritePersist?JSON.parse(favoritePersist):[]
})()

const favorite=createSlice({
    name:'favorite',
    initialState,
    reducers:{
        setFavorite:(state,action)=>{
            const product=action.payload
            return [...product]
        },
        addFavorite:(state,action)=>{
            const product=action.payload
            console.log(product)
            
            const newState=[...state,product]
            return newState
        },
        deleteFavorite:(state,action)=>{
            const product=action.payload
            const newstate=state.filter(e=>e._id!==product._id)
            return newstate
        }
    }
})
export const {setFavorite,addFavorite,deleteFavorite} =favorite.actions

export default favorite.reducer