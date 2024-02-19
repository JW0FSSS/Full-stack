export async function FetchFavorite({user_id}:{user_id:string}) {
    const res= await fetch(`http://localhost:3000/favorite/${user_id}`,{
        method:'post',
        headers:{
            'Content-type':'application/json'
        },
    })
    const data=await res.json()
    return data
}