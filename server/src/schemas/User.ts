import { Schema,model } from "mongoose";

const UserSchema=new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username:{
        type:String,
        unique:true,
        require:true
    },
    address: {
        street: String,
        city: String,
        state: String,
    },
    image:{
        type:String,
    },
    phoneNumber: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }]
},{timestamps:true})

export const UserModel= model('User',UserSchema)