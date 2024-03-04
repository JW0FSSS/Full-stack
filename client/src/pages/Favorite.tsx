import { useEffect } from "react"
import { FetchFavorite } from "../services/favorite"
import { useDispatch, useSelector } from "react-redux"
import { setFavorite } from "../store/favoriteReducer"
import { IStore } from "../store/ConfigureStore"
import { SideBar } from "../components/SideBar"
import { addCart, removeCart } from "../store/cartReducer"
import { Plus } from "../icons/plus"

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
        )
    },[])
    return(
        <section className="bg-black/70 min-h-screen ">
            <SideBar/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:ml-80 p-10 w-full">
                        {favorite.map(product=>{
                            const filter=cart.some(e=>e._id==product._id)
                            return(
                                <article key={product._id} className="bg-black/70 rounded-md flex flex-col items-center py-3 px-10 gap-4 text-white/80">
                                    <div className="-mt-10 w-60 h-60 overflow-hidden grid place-content-center">
                                        <img src={`${product.image}`} alt={`${product.description}`}  />
                                    </div>
                                    <div className="mb-5 flex flex-col items-center gap-4">
                                        <h1 className="text-white">{product.name}</h1>
                                        <h2 className="text-center">{product.description}</h2>
                                        <span className="text-green-700 text-xl">{product.price}$</span>
                                    </div>
                                    <button className="flex gap-5 mb-5" onClick={()=>{return filter?productDispatch(removeCart(product._id)):productDispatch(addCart(product))}}>
                                            <div className={` rounded-full border-2 ${filter?'border-red-800 text-red-600':'border-green-800 text-green-600'}`}>
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


