import { useState } from "react"
import { User } from "../types/User.d"
import { UserFetchRegister } from "../services/User"
import { Navigate } from "react-router"

export function Register() {
    const [data,setData]=useState<User>({username:'',email:'',password:'',image:'',address:{city:'',state:'',street:''},phoneNumber:'',token:''})
    const [error,setError]=useState({message:''})

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleRegister=(e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault()

       UserFetchRegister({...data}).then(res=>{
        setError({message:res.error})
        setError({message:res.message})
        setTimeout(() => {
            setError({message:''})
        }, 2500);
       })
   }
    
    return(
        <section className="flex flex-col items-center h-screen gap-20  bg-slate-300">
            <div className="mt-60 flex flex-col items-center bg-white py-10 px-20 rounded-lg shadow-2xl">
                <h1 className="text-4xl flex gap-2" >Good Games</h1>
                {error.message?<p className="p-1 mt-4 bg-red-500 rounded-md" >{error.message}</p>:''}
                <form onSubmit={handleRegister} className="flex flex-col max-w-lg gap-5 p-10">
                    <input className="py-2 px-5 rounded-xl border-2 border-gray-200 focus:outline-none" type="name" placeholder="carloss" required name="username" onChange={handleChange}/>
                    <input className="py-2 px-5 rounded-xl border-2 border-gray-200 focus:outline-none" type="email" placeholder="user@gmail.com" required name="email" onChange={handleChange}/>
                    <input className="py-2 px-5 rounded-xl border-2 border-gray-200 focus:outline-none" type="text" placeholder="phoneNumber" required name="phoneNumber" onChange={handleChange}/>
                    <input className="py-2 px-5 rounded-xl border-2 border-gray-200 focus:outline-none" type="password" placeholder="******" required name="password" onChange={handleChange}/>
                    <button className="bg-emerald-600 rounded-xl text-white mt-4 py-1 px-2" >Register</button>
                </form>
            </div>
           {error.message=='user created succesfully' && (<Navigate to='/profile' replace={true} />)}

        </section>
    )
}