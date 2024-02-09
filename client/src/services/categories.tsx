export async function GetCategories() {
    const res=await fetch('http://localhost:3000/category',{
        method:'get',
        headers:{
            'Content-type':'application/json'
        }
    })
    const data=await res.json()

    return data
}