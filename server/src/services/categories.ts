import { Types } from "mongoose";
import { CategoryModel } from "schemas/categories";
import { ProductModel } from "schemas/products";
import { Category } from "types/category";

export async function CreateCategory({name}:Category) {
    
    try {
        const category= await CategoryModel.findOne({name})
        
        if (category) return {error:'category name is alreadry exist'}
        
        const newCategory= new CategoryModel({
            name
        })

        const savedCategory=await newCategory.save()

        return savedCategory
    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}

export async function GetCategory() {
    
    try {
        const categories= await CategoryModel.find({})
        
        return categories

    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}

export async function GetCategoryId({id}:{id:string}) {
    
    try {
        const category= await ProductModel.findById({_id:id})

        if (!category) return {error:'category no exist'}
        
        return category

    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}