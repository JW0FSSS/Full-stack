import { Request, Response } from "express"
import { CreateCategory, GetCategory, GetCategoryId } from "services/categories"

export async function CreateCategoryController(req:Request,res:Response) {
    
    try {
        const {name}=req.body

        const data= await CreateCategory({name})
        
        res.json(data)

    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}
export async function GetCategoryController(req:Request,res:Response) {
    
    try {
        const data= await GetCategory()
        
        res.json(data)
    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}
export async function GetCategoryIdController(req:Request,res:Response) {
    
    try {
        const {id}=req.params

        const data= await GetCategoryId({id})

        res.json(data)
    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}