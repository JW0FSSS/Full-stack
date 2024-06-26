import { useEffect,  } from "react"
import { IStore } from "../store/ConfigureStore"
import { SideBar } from "../components/SideBar"
import { useDispatch, useSelector } from "react-redux"
import {  UserFetchProfileOk } from "../services/User"
import { removeUser, setUser } from "../store/usersReducer"

export function Profile() {

    const user=useSelector((state:IStore)=>state.user)
    const userDispatch=useDispatch()
    
    useEffect(()=>{
        UserFetchProfileOk({token:user.token})
        .then(res=>{
            if (!res.ok) {
               userDispatch(removeUser()) 
            }
            return res.json()
            
        }).then(data=>userDispatch(setUser(data)))
        
        
    },[])
    
    return(
        
        <section className="flex flex-col items-center h-screen gap-20 bg-black/60 lg:ml-80">
            
            <SideBar/>
            <main className="flex flex-col items-start min-w-80 min-h-80 mx-auto bg-[#212123] rounded-lg text-white/80 pl-10 h-full w-full py-10 gap-y-10">
                <div className="mx-auto ">
                    <img src={`${user?.image?user.image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"}`} alt=""  className="w-16 rounded-full"/>
                </div>
                <div className="flex flex-col gap-2 mx-auto">
                    <h1 className="hover:cursor-pointer hover:bg-white/20 rounded-xl px-2 py-1">Username:  {user.username.toLocaleUpperCase()}</h1>
                    <h2  className="hover:cursor-pointer hover:bg-white/20 rounded-xl px-2 py-1">Email:  {user.email}</h2>
                    <h1 className="hover:cursor-pointer hover:bg-white/20 rounded-xl px-2 py-1">Address:  {user.address?.city ||'there isnt city'}</h1>
                    <h1 className="hover:cursor-pointer hover:bg-white/20 rounded-xl px-2 py-1">State:  {user.address?.state ||'there isnt state'}</h1>
                    <h1 className="hover:cursor-pointer hover:bg-white/20 rounded-xl px-2 py-1">Street:  {user.address?.street ||'there isnt street'}</h1>
                </div>
            </main>
           
        </section>
    )
} 