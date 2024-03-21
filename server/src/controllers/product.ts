import { Request, Response } from "express";
import { CreateProduct, GetProductId, GetProducts } from "services/product";

export async function CreateProductController(req:Request,res:Response) {
    
    try {
        const {name,price,quantity,description,image,CategoryId}=req.body

        const data = await CreateProduct({name,price,quantity,description,image,CategoryId})

        res.json(data)

    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}
export async function GetProductController(req:Request,res:Response) {
    
    try {

        const {limit=8,filter=''}=req.query

        const data = await GetProducts({limit,filter})

        res.json(data)

    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}
export async function GetProductIdController(req:Request,res:Response) {
    
    try {
        const {id}=req.params

        const data = await GetProductId({id})

        res.json(data)

    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}