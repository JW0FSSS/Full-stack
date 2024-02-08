import { Schema,model } from "mongoose";

const FavoriteSchema=new Schema({
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

export const FavoriteModel= model('Favorite',FavoriteSchema)