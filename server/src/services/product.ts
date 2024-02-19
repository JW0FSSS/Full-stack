
import { ProductModel } from "schemas/products";
import { Product } from "types/product";

export async function CreateProduct({categories_id,name,price,quantity,description,image}:Product) {
    
    try {
        const product= await ProductModel.findOne({name})
        
        if (product) return {error:'products name is alreadry exist'}
        
        const newProduct= new ProductModel({
            name,
            description:description||'',
            image:image||'',
            price,
            quantity,
            categories_id
        })

        const savedProduct=await newProduct.save()

        return savedProduct
    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}

export async function GetProducts({limit}:{limit:number}) {
    
    try {
        const products= await ProductModel.find({}).limit(limit).populate('categories_id')
        
        return products

    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}

export async function GetProductId({id}:{id:string}) {
    
    try {
        const product= await ProductModel.findById({_id:id}).populate('categories_id')

        if (!product) return {error:'products no exist'}
        
        return product

    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}