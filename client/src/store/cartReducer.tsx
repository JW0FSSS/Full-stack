import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../types/product.d";

const initialState:IProduct[]=(()=>{
    const cartPersist=localStorage.getItem('__cart__')
   return cartPersist?JSON.parse(cartPersist):[]
})()   

const cart=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart:(state,action)=>{
            const product=action.payload
            const index= state.findIndex(e=>e._id==product._id)

            if (index < 0) {
                return [...state,{...product,quantity:1}]
            }

            state[index].quantity+=1
            
            return state
        },

        clearCart:()=>{ return[]},
        removeCart:(state,action)=>{
            const id=action.payload
            return state.filter(e=>e._id!==id)
        },
        removeOneCart:(state,action)=>{
            const id=action.payload
            const index= state.findIndex(e=>e._id==id)
            if (state[index].quantity==1) {
                return state.filter(e=>e._id!==id) 
            }
            state[index].quantity-=1      
            return state
        }
    }
})
export const {addCart,clearCart,removeCart,removeOneCart}=cart.actions

export default cart.reducer