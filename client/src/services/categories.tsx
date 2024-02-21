export async function GetCategories() {
    const res=await fetch('https://good-games-25uj.onrender.com/category',{
        method:'get',
        headers:{
            'Content-type':'application/json'
        }
    })
    const data=await res.json()

    return data
}