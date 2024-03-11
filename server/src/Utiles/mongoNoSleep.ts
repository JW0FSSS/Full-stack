import { CategoryModel } from "schemas/categories"

export function NoSleep() {
    setInterval(()=>{
    CategoryModel.find({})
    },1700000)
}