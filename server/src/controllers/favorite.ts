import { Request, Response } from "express";
import { AddFavorite, FavoriteId } from "services/favorite";

export async function AddFavoriteController(req:Request,res:Response) {
    
   try {
    const {product_id,user_id}=req.body

    const data= await AddFavorite({product_id,user_id})

    res.json(data)

   } catch (error) {
    throw new Error(`error : ${error}`);
   }
}

export async function FavoriteIdController(req:Request,res:Response) {
    
   try {
    const {user_id}=req.params

    const data= await FavoriteId({user_id})

    res.json(data)

   } catch (error) {
    throw new Error(`error : ${error}`);
   }
}