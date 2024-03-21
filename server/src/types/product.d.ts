import { Types } from "mongoose";

 export interface Product {
    name:string,
    price:number,
    image?:string,
    description?:string,
    quantity:number,
    rate?:number,
    CategoryId:number
}

