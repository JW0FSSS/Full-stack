import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { UserLogin } from "../types/User.d"
import { UserFetchLogin } from "../services/User"
import { useDispatch, useSelector } from "react-redux"
import { IStore } from "../store/ConfigureStore"
import { setUserLogin } from "../store/usersReducer"

export function Account() {

    const [data,setData]=useState<UserLogin>({email:'',password:''})
    const userDispatch=useDispatch()
    const user=useSelector((state:IStore)=>state.user)
    const [error,setError]=useState({message:''})

    const handleData=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleUser=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        UserFetchLogin({...data}).then((res)=>{
            setError({message:res.error})
            userDispatch(setUserLogin(res))
            setTimeout(() => {
                setError({message:' '})
            }, 2500);
        }
        ).catch(res=>setError({message:res.message}))
    }

    return(
        <section className="flex flex-col items-center h-screen gap-20  bg-slate-300">
            <div className="mt-60 flex flex-col items-center bg-white lg:py-10 lg:px-20 py-6 px-14 rounded-lg shadow-2xl">
                <h1 className="text-4xl flex gap-2 font-semibold" ><span className="text-[#895bd3]">Good</span> Games</h1>
                {error.message?<p className="p-1 mt-4 bg-red-500 rounded-md" >{error.message}</p>:''}
                <form onSubmit={handleUser} className="flex flex-col max-w-lg gap-5 p-10">
                    <input className="py-2 px-5 rounded-xl border-2 border-gray-200 focus:outline-none shadow-md" type="email" placeholder="user@gmail.com" required name="email" onChange={handleData} />
                    <input className="py-2 px-5 rounded-xl border-2 border-gray-200 focus:outline-none shadow-md" type="password" placeholder="******" required name="password" onChange={handleData} />
                    <button className="bg-[#895bd3] rounded-xl text-white mt-4 py-1 px-2 shadow-md" >Sign In</button>
                </form>
                    <Link to='/register' className="text-[#895bd3] border-b-2 border-transparent transition-colors ease-in-out  hover:border-b-2 hover:border-[#895bd3]">Create an account</Link>
            </div>
           {user.username && (<Navigate to='/' replace={true} />)}

        </section>
    )
} 