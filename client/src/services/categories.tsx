export async function GetCategories() {
    const res=await fetch('https://vps-4032930-x.dattaweb.com/app2/category',{
        method:'get',
        headers:{
            'Content-type':'application/json'
        }
    })
    const data=await res.json()

    return data
}