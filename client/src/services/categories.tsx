export async function GetCategories() {
    const res=await fetch('https://vps-5068859-x.dattaweb.com/games/category',{
        method:'get',
        headers:{
            'Content-type':'application/json'
        }
    })
    const data=await res.json()

    return data
}
