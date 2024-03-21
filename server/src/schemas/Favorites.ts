import { sequelize } from "config/database";
import { Schema,model } from "mongoose";
import { DataTypes } from "sequelize";

/* const FavoriteSchema=new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    product_id:[{
        type: Schema.Types.ObjectId,
        ref:'Product'
    }]
},{timestamps:true})

export const FavoriteModel= model('Favorite',FavoriteSchema) */

/* export const FavoriteModel=sequelize.define('Favorite',{},{timestamps:true})
 */
