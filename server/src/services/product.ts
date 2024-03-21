
import { ProductModel } from "schemas/relations";
import { Product } from "types/product";

export async function CreateProduct({categories_id,name,price,quantity,description,image}:Product) {
    
    try {
        const product= await ProductModel.findOne({where:{name}})
        
        if (product) return {error:'products name is alreadry exist'}
        
        const newProduct= await ProductModel.create({
            name,
            description:description||'',
            image:image||'',
            price,
            quantity,
            categories_id
        })


        return newProduct.toJSON()
    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}

export async function GetProducts({limit,filter}:{limit:number,filter:string}) {
    
    try {
        if (filter=='') {
            return await ProductModel.findAll({limit})
        }
        const products= await ProductModel.findAll({where:{name:{[Op.like]:filter}}})
       
        return products

    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}

export async function GetProductId({id}:{id:string}) {
    
    try {
        const product= await ProductModel.findById({_id:id})

        if (!product) return {error:'products no exist'}
        
        return product

    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}