import { categories } from "../mock/categories"
import { ICategory } from "../store/categoryReducer"

export async function GetCategoriesMock():Promise<ICategory[]>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(categories)
        },1000)
    })
}