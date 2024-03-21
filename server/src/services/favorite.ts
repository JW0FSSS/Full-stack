
import { Types } from "mongoose";
import { FavoriteModel } from "schemas/relations";
import { Favorite } from "types/favorite";

export async function AddFavorite({product_id,user_id}:Favorite) {
    
    try {
        const favorite= await FavoriteModel.create({
            UserId:user_id,
            ProductId:product_id
        })

        return favorite.toJSON()
    } catch (error) {
        throw new Error(`error : ${error}`);
    }
    
}
export async function DeleteFavorite({product_id,user_id}:Favorite) {
    
    try {
        const favorite= await FavoriteModel.destroy({where:{ProductId:product_id,UserId:user_id}})
        
        return {msg:"eliminated"}
    } catch (error) {
        throw new Error(`error : ${error}`);
    }
    
}

export async function FavoriteId({user_id}:{user_id:string}) {
    try {
        
        const favorite = await FavoriteModel.findAll({where:{UserId:user_id}})

        if (!favorite) return {error:'error when reference user'}

        return favorite

    } catch (error) {
        throw new Error(`error : ${error}`);
        
    }
}
