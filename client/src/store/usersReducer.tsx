import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/User.d";

const initialState: User=(()=>{
    const userPersist=localStorage.getItem('__user__')
    return userPersist?JSON.parse(userPersist):{}
})()

export const user=createSlice({
    name:'users',
    initialState,
    reducers:{
        setUser:(state,action:{type:string,payload:User})=>{
            const user=action.payload
            return user
        }
    }
})
export const {setUser}=user.actions
export default user.reducer