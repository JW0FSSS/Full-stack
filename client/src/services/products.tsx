

export async function GetProducts({limit=0,filter=''}:{limit:number,filter:string}) {
    const res=await fetch(`https://vps-5068859-x.dattaweb.com/games/product?limit=${limit}&filter=${filter}`,{
        method:'get',
        headers:{
            'Content-type':'application/json'
        }
    })
    const data=await res.json()

    return data
}
export async function GetProductsId({id}:{id:string}) {
    const res=await fetch(`https://vps-5068859-x.dattaweb.com/games/product/${id}`,{
        method:'get',
        headers:{
            'Content-type':'application/json'
        }
    })
    const data=await res.json()
    
    return data
}
