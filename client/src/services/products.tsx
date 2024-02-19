

export async function GetProducts({limit=0}:{limit:number}) {
    const res=await fetch(`http://localhost:3000/product?limit=${limit}`,{
        method:'get',
        headers:{
            'Content-type':'application/json'
        }
    })
    const data=await res.json()

    return data
}
export async function GetProductsId({id}:{id:string}) {
    const res=await fetch(`http://localhost:3000/product/${id}`,{
        method:'get',
        headers:{
            'Content-type':'application/json'
        }
    })
    const data=await res.json()
    
    return data
}