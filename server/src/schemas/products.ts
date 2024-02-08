import { Schema,model } from "mongoose";

const ProductsSchema=new Schema({
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

export const ProductModel= model('Product',ProductsSchema)