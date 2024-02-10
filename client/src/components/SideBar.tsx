import { useEffect } from "react";
import { Link} from "react-router-dom";
import { GetCategories } from "../services/categories";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../store/ConfigureStore"
import { setCategory } from "../store/categoryReducer";
import { User } from "../icons/profile";
import { Search } from "../icons/search";
import { Heart } from "../icons/heart";
import { Game } from "../icons/game";
import { Help } from "../icons/help";
import { Conditions } from "../icons/conditons";
import { Confidelity } from "../icons/confidelity";
import { Facebook } from "../icons/facebook";
import { Instagram } from "../icons/instagram";


export function SideBar() {
    const categories=useSelector((state:IStore)=>state.category)
    const categoriesDispatch=useDispatch()

    useEffect(()=>{

        GetCategories().then(categories=>{
            categoriesDispatch(setCategory(categories))
        })
    },[])


    return(
        <aside className="fixed bg-black/90 text-white/70 left-0 top-0 bottom-0 w-80 flex flex-col items-start gap-10 py-5 pl-20">
            <header className="flex">
                <Link to='/' className="w-12"><img src="https://static.vecteezy.com/system/resources/thumbnails/024/553/534/small/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png" alt="" /></Link>
                <div className="flex flex-col text-white font-semibold justify-center items-center">
                <span className="text-green-700 text-xl">GOOD</span>
                <p >GAMES</p>
                </div>
            </header>
            <Link to='/cart' className="px-8 py-2 rounded-full bg-green-800 text-white/90">Go to Pay</Link>

            <nav className="flex flex-col gap-5">
                <Link to={'/profile'}> <img src="" alt=""/><div className="flex gap-5"> <User/> <p>Profile</p></div></Link>
                <Link to={'/'}><div className="flex gap-5"> <Search/><p>Search</p></div></Link>
                <Link to={'/favorite'}><div className="flex gap-5"> <Heart/> <p>Favorite</p></div></Link>
                <Link to={'/'}><div className="flex gap-5"> <User/> <p>To do</p></div></Link>
            </nav>
            <div className="">
                <h1 className="pb-7">Category</h1>
                <div className="flex flex-col gap-4 items-start">
                    {categories.map(category=>{
                     return(
                         <button key={category._id} className="flex gap-5"><Game/> <p>{category.name}</p></button>
                         )   
                    })}
                </div>
            </div>
            <div className="flex gap-5">
                <Link to={'/'}><img src="" alt="" /><Facebook/></Link>
                <Link to={'/'}><img src="" alt="" /><Instagram/></Link>
                <Link to={'/'}><img src="" alt="" /><Facebook/></Link>
                <Link to={'/'}><img src="" alt="" /><Instagram/></Link>
                <Link to={'/'}><img src="" alt="" /><Facebook/></Link>
            </div>
            <div className="flex flex-col gap-4">
                <Link to={'/'}><img src="" alt="" /><div className="flex gap-5"><Help/> Help</div></Link>
                <Link to={'/'}><img src="" alt="" /><div className="flex gap-5"><Conditions/>Conditions</div></Link>
                <Link to={'/'}><img src="" alt="" /><div className="flex gap-5"><Confidelity/>Confidelity</div></Link>
            </div>
        </aside>
    )
}