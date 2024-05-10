import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../types/product.d";

export const product=createSlice({
    name:'product',
    initialState:[] as IProduct[],
    reducers:{
        getProducts:(state,_)=>{
            return state
        },
        setProducts:(_,action:{ payload: IProduct[];type: string;})=>{
            localStorage.setItem("_products_",JSON.stringify(action.payload))
            const products=action.payload 

            return products
        },
        setProductsFilter:(_,action:{ payload: IProduct[];type: string;})=>{
            const products=action.payload 

            return products
        },
    }
})

export const {setProducts,setProductsFilter} = product.actions

export default product.reducer