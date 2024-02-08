import { createSlice } from "@reduxjs/toolkit";

export const user=createSlice({
    name:'users',
    initialState:{},
    reducers:{
        getUser:(state,action)=>{
            return state
        }
    }
})
export const {getUser}=user.actions
export default user.reducer