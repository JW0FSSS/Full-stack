import { IProduct } from "../types/product.d";

export async function FetchPay({cart}:{cart:IProduct[]}){

    const res= await fetch('http://localhost:3000/payment',{
        method:'post',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({cart})
    })
    const data=await res.json()
   
    return data
}