import { CategoryModel } from "schemas/categories"

export async function NoSleep() {
    const res=await CategoryModel.find({})
    setInterval(()=>{
        console.log(res)
    },420000)
}