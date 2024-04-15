

export async function GetProducts({limit=0,filter=''}:{limit:number,filter:string}) {
    const res=await fetch(`https://vps-4032930-x.dattaweb.com/app2/product?limit=${limit}&filter=${filter}`,{
        method:'get',
        headers:{
            'Content-type':'application/json'
        }
    })
    const data=await res.json()

    return data
}
export async function GetProductsId({id}:{id:string}) {
    const res=await fetch(`https://vps-4032930-x.dattaweb.com/app2/product/${id}`,{
        method:'get',
        headers:{
            'Content-type':'application/json'
        }
    })
    const data=await res.json()
    
    return data
}