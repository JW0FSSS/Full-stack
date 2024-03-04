import { useDispatch, useSelector } from "react-redux"
import { Search } from "../icons/search"
import { IStore } from "../store/ConfigureStore"
import { GetProducts } from "../services/products"
import { useEffect, useRef } from "react"
import { setProducts } from "../store/productReducer"
import { removeUser } from "../store/usersReducer"
import { Link } from "react-router-dom"

export function Header() {

    const user=useSelector((state:IStore)=>state.user)
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


    return(
        <header className="w-full flex lg:justify-between justify-evenly mb-10 text-white/70">
            <form className="flex relative" onSubmit={handlefetch}>
                <label htmlFor="search" className="absolute top-2 pl-2">
                        <Search />
                </label>
                <input type="text" placeholder="Search...." className="bg-transparent lg:pr-20 pr-0 pl-9 py-1" id="search" ref={text}/>   
            </form>
                <div className="flex gap-5 items-center">
                    {user.username?user.username.toUpperCase():<Link to={"/login"} className="bg-black/40 p-1 px-2 rounded-xl">Login</Link>}
                    <button className={`${user.image?'':'hidden'}`}>
                        <img className={`rounded-full w-10 `} src={`${user.image?user.image:''}`} alt=""  />
                    </button>
                </div>
            </header>
    )
}