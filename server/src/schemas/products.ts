import { sequelize } from "config/database";
import { Schema,model } from "mongoose";
import { DataTypes } from "sequelize";

/* const ProductsSchema=new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    description:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    rate:{
        type:Number,
    },
    image:{
        type:String,
        unique:true
    },
    categories_id:[{
        type:Schema.Types.ObjectId,
        ref:'Category',
        require:true
    }]

},{timestamps:true})

export const ProductModel= model('Product',ProductsSchema) */

/* export const ProductModel=sequelize.define('Product',
{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    rate:{
        type:DataTypes.DECIMAL,
    },
    image:{
        type:DataTypes.STRING,
        unique:true
    },
},{
    timestamps:true
}) */
