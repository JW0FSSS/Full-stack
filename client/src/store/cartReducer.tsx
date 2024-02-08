import { createSlice } from "@reduxjs/toolkit";


const cart=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        clearCart:(state,action)=>{
            return []
        }
    }
})
export const {}=cart.actions

export default cart.reducer