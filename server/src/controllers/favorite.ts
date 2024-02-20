import { Request, Response } from "express";
import { IRequest } from "middlewares/jsonwebtoken";
import { AddFavorite, DeleteFavorite, FavoriteId } from "services/favorite";

export async function AddFavoriteController(req:IRequest,res:Response) {
    
   try {
    const id=req.id
    const {product_id}=req.body

    const data= await AddFavorite({product_id,user_id:id||''})

    res.json(data)

   } catch (error) {
    throw new Error(`error : ${error}`);
   }
}
export async function DeleteFavoriteController(req:IRequest,res:Response) {
    
   try {
    const id=req.id
    const {product_id}=req.body

    const data= await DeleteFavorite({product_id,user_id:id||''})

    res.json(data)

   } catch (error) {
    throw new Error(`error : ${error}`);
   }
}

export async function FavoriteIdController(req:IRequest,res:Response) {
    
   try {
      
      const id=req.id
    const data= await FavoriteId({user_id:id||''})

    res.json(data)

   } catch (error) {
    throw new Error(`error : ${error}`);
   }
}