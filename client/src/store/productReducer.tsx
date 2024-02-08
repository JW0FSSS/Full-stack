import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../types/product.d";

export const product=createSlice({
    name:'product',
    initialState:[] as IProduct[],
    reducers:{
        getProducts:(state,action)=>{
            return state
        },
        setProducts:(state,action:{ payload: IProduct[];type: string;})=>{
            
            const products=action.payload 

            return products
        }
    }
})

export const {setProducts} = product.actions

export default product.reducer