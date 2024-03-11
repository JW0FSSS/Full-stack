import { CategoryModel } from "schemas/categories"

export function NoSleep() {
    setInterval(()=>{
    console.log(CategoryModel.find({}))
    },1700000)
}