
import { ProductModel } from "schemas/relations";
import { Product } from "types/product";

export async function CreateProduct({name,price,quantity,description,image,CategoryId}:Product) {
    
    try {
        const product= await ProductModel.findOne({where:{name}})
        
        if (product) return {error:'products name is alreadry exist'}
        
        const newProduct= await ProductModel.create({
            name,
            description:description||'',
            image:image||'',
            price,
            quantity,
            CategoryId
        })


        return newProduct.toJSON()
    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}

export async function GetProducts({limit,filter}:{limit:number,filter:string}) {
    
    try {
        if (filter=='') {
            const products=await ProductModel.findAll({limit})
            return products
        }
        const products= await ProductModel.findAll({where:{name:{[Op.like]:filter}}})
       
        return products

    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}

export async function GetProductId({id}:{id:string}) {
    
    try {
        const product= await ProductModel.findByPk(id)

        if (!product) return {error:'products no exist'}
        
        return product

    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}