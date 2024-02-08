import { UserRegister } from "../types/User.d"

export async function UserRegister({username,email,password,address,image,phoneNumber}:UserRegister) {
    const res=await fetch('http://localhost:3000/register',{
        method:'post',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({username,email,password,address,image,phoneNumber})
    })
    const data=await res.json()
    return data
}