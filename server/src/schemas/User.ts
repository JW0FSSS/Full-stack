import { sequelize } from "config/database";
import { Schema,model } from "mongoose";
import { DataTypes } from "sequelize";

/* const UserSchema=new Schema({
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

export const UserModel= model('User',UserSchema) */

/* export const UserModel=sequelize.define('User',
{
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    address: {
        type: DataTypes.STRING,
    },
    image:{
        type:DataTypes.STRING,
    },
    phoneNumber: DataTypes.STRING,
    orders: {
        type: DataTypes.INTEGER,
    }
})
 */