import { UserLogin, User } from "../types/User.d"

export async function UserFetchRegister({username,email,password,address,image,phoneNumber}:User) {
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

export async function UserFetchLogin({email,password}:UserLogin) {
        
        const res=await fetch('http://localhost:3000/login',{
            method:'post',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({email,password})
        })
        const data=await res.json()
        return data
    
}

export async function UserFetchProfile({token}:{token:string}) {
        
        const res=await fetch('http://localhost:3000/profile',{
            headers:{
                'Content-type':'application/json',
                'Authorization':`bearer ${token}` 
            }
        })
        const data=await res.json()
        return data
    
}