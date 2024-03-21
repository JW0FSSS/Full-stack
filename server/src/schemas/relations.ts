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
export const CategoryModel=sequelize.define('Category',
{
name:{
    type:DataTypes.STRING,
    allowNull:false,
}
},{timestamps:true})

export const FavoriteModel=sequelize.define('Favorite',{},{timestamps:true})

export const UserModel=sequelize.define('User',
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
/*     orders: {
        type: DataTypes.INTEGER,
    } */
})

export const ProductModel=sequelize.define('Product',
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
})

CategoryModel.hasMany(ProductModel)
ProductModel.belongsTo(CategoryModel)

UserModel.belongsToMany(ProductModel,{through:FavoriteModel})
ProductModel.belongsToMany(UserModel,{through:FavoriteModel})