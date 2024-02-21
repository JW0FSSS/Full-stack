import { createSlice } from "@reduxjs/toolkit";

export interface ICategory{
    _id:string,
    name:string
}

const category=createSlice({
    name:'category',
    initialState:[] as ICategory[],
    reducers:{
        setCategory:(_,action:{ payload: ICategory[];type: string;})=>{
            const categories=action.payload
            return categories
        }
    }
})
export const {setCategory}=category.actions

export default category.reducer