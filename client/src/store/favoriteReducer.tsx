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
        }
    }
})
export const {setFavorite} =favorite.actions

export default favorite.reducer