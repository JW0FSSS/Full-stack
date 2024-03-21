import { Types } from "mongoose";
import { CategoryModel, ProductModel } from "schemas/relations";
import { Category } from "types/category";

export async function CreateCategory({name}:Category) {
    
    try {
        const category= await CategoryModel.findOne({where:{name}})
        
        if (category) return {error:'category name is alreadry exist'}
        
        const newCategory= await CategoryModel.create({
            name
        })

        return newCategory.toJSON()
    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}

export async function GetCategory() {
    
    try {
        const categories= await CategoryModel.findAll()
        
        return categories

    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}

export async function GetCategoryId({id}:{id:string}) {
    
    try {
        const category= await ProductModel.findByPk(id)

        if (!category) return {error:'category no exist'}
        
        return category.toJSON()

    } catch (error) {
        throw new Error(`error : ${error}`);
    }

}