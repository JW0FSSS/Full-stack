import { IProduct } from "../types/product.d";

export async function FetchPay({cart}:{cart:IProduct[]}){

    const res= await fetch('https://vps-4032930-x.dattaweb.com/app2/payment',{
        method:'post',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({cart})
    })
    const data=await res.json()
   
    return data
}