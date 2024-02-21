export async function FetchFavorite({token}:{token:string}) {
    const res= await fetch(`https://full-stack-qpdq.onrender.com//favorite`,{
        headers:{
            'Content-type':'application/json',
            'Authorization':`bearer ${token}`
        },
    })
    const data=await res.json()
    return data
}
export async function FetchFavoriteAdd({token,product_id}:{token:string,product_id:string}) {
    const res= await fetch(`https://full-stack-qpdq.onrender.com//favorite`,{
        method:'post',
        headers:{
            'Content-type':'application/json',
            'Authorization':`bearer ${token}`
        },
        body:JSON.stringify({product_id})
    })
    const data=await res.json()
    return data
}
export async function FetchFavoriteDelete({token,product_id}:{token:string,product_id:string}) {
    const res= await fetch(`https://full-stack-qpdq.onrender.com//favorite`,{
        method:'delete',
        headers:{
            'Content-type':'application/json',
            'Authorization':`bearer ${token}`
        },
        body:JSON.stringify({product_id})
    })
    const data=await res.json()
    return data
}