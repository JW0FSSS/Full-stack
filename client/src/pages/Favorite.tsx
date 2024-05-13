import { useEffect } from "react"
import { FetchFavorite } from "../services/favorite"
import { useDispatch, useSelector } from "react-redux"
import { setFavorite } from "../store/favoriteReducer"
import { IStore } from "../store/ConfigureStore"
import { SideBar } from "../components/SideBar"
import { addCart, removeCart } from "../store/cartReducer"
import { Plus } from "../icons/plus"
import { removeUser } from "../store/usersReducer"

export function Favorite() {

    const favorite=useSelector((state:IStore)=>state.favorite)
    const cart=useSelector((state:IStore)=>state.cart)
    const user=useSelector((state:IStore)=>state.user)

    const favoriteDispatch=useDispatch()
    const productDispatch=useDispatch()

    useEffect(()=>{
        
        FetchFavorite({token:user.token})
        .then(data=>{
            favoriteDispatch(setFavorite(data.product_id))
        }
        ).catch(()=>{favoriteDispatch(removeUser())})
    },[])
    return(
        <section className="bg-black/70 min-h-screen ">
            <SideBar/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:ml-80 p-10">
                        {favorite.map(product=>{
                            const filter=cart.some(e=>e._id==product._id)
                            return(
                                <article key={product._id} className="bg-[#212123]  group rounded-md flex flex-col items-center py-3 px-10 gap-4 text-white/80 relative border-[1px] border-transparent z-0  hover:border-white/80 transition-color ease-in-out  shadow-md">
                                    <div className="-mt-10 w-60 h-60 overflow-hidden grid place-content-center">
                                        <img src={`${product.image}`} alt={`${product.description}`}  />
                                    </div>
                                    <div className="mb-5 flex flex-col items-center gap-4">
                                        <h1 className="text-white">{product.name}</h1>
                                        <h2 className="text-center">{product.description}</h2>
                                        <span className="text-[#9965f0] text-xl">{product.price}$</span>
                                    </div>
                                    <button className="flex gap-5 mb-5" onClick={()=>{return filter?productDispatch(removeCart(product._id)):productDispatch(addCart(product))}}>
                                            <div className={` rounded-full border-2   ${filter?'border-[#b94747] text-[#b94747] group-hover:bg-[#b94747] group-hover:text-white':'border-[#9965f0] text-[#9965f0] group-hover:text-white group-hover:bg-[#9965f0]'}`}>
                                                <Plus/>
                                            </div>    
                                            <p>{filter?'Remove Cart':'Add Cart'}</p>
                                        </button>
                                </article>
                            )
                        })}
                    </div>
        </section>
    )
}


