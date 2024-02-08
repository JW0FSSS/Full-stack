

export async function GetProducts() {
    const res=await fetch('http://localhost:3000/product',{
        method:'get',
        headers:{
            'Content-type':'application/json'
        }
    })
    const data=await res.json()

    return data
}