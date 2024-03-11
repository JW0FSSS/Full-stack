import { products } from "../mock/products"
import { IProduct } from "../types/product.d"


export async function GetProductsMock({limit=0,filter=''}:{limit:number,filter:string}):Promise<IProduct[]> {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const filterProducts=filter?products.filter(e=>e.name.startsWith(filter)):products
            const limitProducts=limit?filterProducts.filter((e,i)=>i<limit):products
            res(limitProducts)
        },1000)
    })
}
