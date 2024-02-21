export async function GetCategories() {
    const res=await fetch('https://full-stack-qpdq.onrender.com//category',{
        method:'get',
        headers:{
            'Content-type':'application/json'
        }
    })
    const data=await res.json()

    return data
}