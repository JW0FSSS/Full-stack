import { Schema,model } from "mongoose";

const CategoriesSchema=new Schema({
    name: {
        type: String,
        required: true,
        unique:true
    }
},{timestamps:true})

export const CategoryModel= model('Category',CategoriesSchema)