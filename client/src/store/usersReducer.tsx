import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/User.d";

export const user=createSlice({
    name:'users',
    initialState:{} as User,
    reducers:{
        setUser:(state,action:{type:string,payload:User})=>{
            const user=action.payload
            return user
        }
    }
})
export const {setUser}=user.actions
export default user.reducer