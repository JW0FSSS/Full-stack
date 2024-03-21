import { sequelize } from "config/database";
import { Schema,model } from "mongoose";
import { DataTypes } from "sequelize";

/* const CategoriesSchema=new Schema({
    name: {
        type: String,
        required: true,
        unique:true
    }
},{timestamps:true})

export const CategoryModel= model('Category',CategoriesSchema) */

/* export const CategoryModel=sequelize.define('Category',
{
name:{
    type:DataTypes.STRING,
    allowNull:false,
}
},{timestamps:true}) */