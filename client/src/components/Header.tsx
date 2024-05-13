import { useDispatch, useSelector } from "react-redux"
import { Search } from "../icons/search"
import { IStore } from "../store/ConfigureStore"
import { GetProducts } from "../services/products"
import { useEffect, useRef, useState } from "react"
import { setProducts } from "../store/productReducer"
import { removeUser } from "../store/usersReducer"
import { Link } from "react-router-dom"
import { setFavorite } from "../store/favoriteReducer"

export function Header() {

    const user=useSelector((state:IStore)=>state.user)
    const [logout,setLogout]=useState(false)
    const productDispatch=useDispatch()
    const text = useRef<HTMLInputElement>(null);

    const handlefetch=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const filter=text.current?.value 
        GetProducts({limit:8,filter:filter||''})
        .then(res=>productDispatch(setProducts(res)))
    }

    useEffect(()=>{
        user.username?null:productDispatch(removeUser())
    },[])
    const handleLogout=()=>{
        productDispatch(removeUser()) 
        productDispatch(setFavorite([]))
    }

    return(
        <header className="w-full flex lg:justify-between justify-evenly mb-10 text-white/70">
            <form className="flex relative" onSubmit={handlefetch}>
                <label htmlFor="search" className="absolute top-1 pl-2">
                        <Search />
                </label>
                <input type="text" placeholder="Search...." className="bg-[#28282a] lg:pr-20 pr-0 pl-9 py-1" id="search" ref={text}/>   
            </form>
                <div className="flex gap-5 items-center">
                    {user.username?user.username.toUpperCase():<Link to={"/login"} className="bg-black/40 p-1 px-2 rounded-xl">Login</Link>}
                    <button className={`${user.image?'':'hidden'} relative`} onClick={()=>{setLogout(!logout)}}>
                        <button className={`${logout?'absolute':'hidden'} bg-black rounded-lg px-2 top-5 right-10 w-20`} onClick={handleLogout}>Log out</button>
                        <img className={`rounded-full w-10 `} src={`${user.image?user.image:''}`} alt=""  />
                    </button>
                </div>
            </header>
    )
}