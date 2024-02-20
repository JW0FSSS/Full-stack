import { useEffect,  } from "react"
import { IStore } from "../store/ConfigureStore"
import { SideBar } from "../components/SideBar"
import { useDispatch, useSelector } from "react-redux"
import { UserFetchProfile } from "../services/User"
import { setUser } from "../store/usersReducer"

export function Profile() {

    const user=useSelector((state:IStore)=>state.user)
    const userDispatch=useDispatch()
    
    useEffect(()=>{
        UserFetchProfile({token:user.token})
        .then(data=>{
            userDispatch(setUser(data))
        })
        
        
    },[])
    
    return(
        
        <section className="flex flex-col items-center h-screen gap-20 bg-black/60 ml-80">
            
            <SideBar/>
            <main className="flex flex-col justify-evenly items-start min-w-80 min-h-80 mx-auto mt-20 bg-black/80 rounded-lg text-white/80 pl-10">
                <div className="mx-auto ">
                    <img src={`${user.image}`} alt=""  className="w-16 rounded-full"/>
                </div>

                <h1>Username:  {user.username.toLocaleUpperCase()}</h1>
                <h2>Email:  {user.email}</h2>
                <h1>Address:  {user.address?.city ||'there isnt city'}</h1>
                <h1>State:  {user.address?.state ||'there isnt state'}</h1>
                <h1>Street:  {user.address?.street ||'there isnt street'}</h1>
            </main>
           
        </section>
    )
} 