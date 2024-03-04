import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/User.d";

const BaseState:User={
    username:"",
    address:{
        street:"",
        city:"",
        state:""
    },
    image:"",
    phoneNumber:"",
    email:"",
    password:"",
    token:""
}

const initialState: User=(()=>{
    const userPersist=localStorage.getItem('__user__')
    return userPersist?JSON.parse(userPersist):BaseState
})()

export const user=createSlice({
    name:'users',
    initialState,
    reducers:{
        setUser:(state,action:{type:string,payload:User})=>{
            const user=action.payload

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
        },
        removeUser:()=>{
            localStorage.removeItem('__user__')
            return BaseState
        }
    }
})
export const {setUser,setUserLogin,removeUser}=user.actions
export default user.reducer