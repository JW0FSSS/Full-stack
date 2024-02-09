import { useSelector } from "react-redux"
import { Search } from "../icons/search"
import { IStore } from "../store/ConfigureStore"

export function Header() {

    const user=useSelector((state:IStore)=>state.user)

    return(
        <header className="w-full flex justify-between mb-10 text-white/70">
                <label htmlFor="search" className="flex relative ">
                    <input type="text" placeholder="Search...." className="bg-transparent pr-20 pl-7 py-1" id="search"/>
                    <div className="absolute top-1">
                        <Search />
                    </div>
                </label>
                <div className="flex gap-5">
                    <p>{user.username?user.username.toUpperCase():'Login'}</p>
                    <img className='rounded-full' src={`${user.image?user.image:''}`} alt="" />
                </div>
            </header>
    )
}