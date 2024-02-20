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

            state.address=user.address
            state.email=user.email
            state.phoneNumber=user.phoneNumber

            return state
        },
        setUserLogin:(state,action:{type:string,payload:User})=>{
            const user=action.payload
            state.username=user.username
            state.image=user.image
            state.token=user.token
            return state
        }
    }
})
export const {setUser,setUserLogin}=user.actions
export default user.reducer