
import { Types } from "mongoose";
import { FavoriteModel } from "schemas/Favorites";
import { Favorite } from "types/favorite";

export async function AddFavorite({product_id,user_id}:Favorite) {
    
    try {
        const favorite= await FavoriteModel.findOne({user_id})
        
        if (!favorite) return {error:'error when reference user'}

        const updateFavorites = await FavoriteModel.findOneAndUpdate({user_id},{$push:{product_id}},{new:true})
        return updateFavorites
    } catch (error) {
        throw new Error(`error : ${error}`);
    }
    
}

export async function FavoriteId({user_id}:{user_id:string}) {
    try {
        
        const favorite = await FavoriteModel.findOne({user_id}).populate('product_id')

        if (!favorite) return {error:'error when reference user'}

        return favorite

    } catch (error) {
        throw new Error(`error : ${error}`);
        
    }
}
