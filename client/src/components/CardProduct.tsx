import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IStore } from "../store/ConfigureStore"
import { addCart, removeCart } from "../store/cartReducer"
import { Plus } from "../icons/plus"
import { IProduct } from "../types/product.d"
import { ButtonFavorite } from "./AddFavoriteButton"
import {  FetchFavoriteOk } from "../services/favorite"
import { setFavorite } from "../store/favoriteReducer"

import { removeUser } from "../store/usersReducer"

export function CardProduct({cart,product:products}:{cart:IProduct[],product:IProduct[]}) {

    const favorite= useSelector((state:IStore)=>state.favorite)
    const user= useSelector((state:IStore)=>state.user)
    const productDispatch=useDispatch()
    const favoriteDispatch=useDispatch()    

    useEffect(()=>{
        user.token
        ?FetchFavoriteOk({token:user.token})
        .then(res=>{
            if (!res.ok) {
                productDispatch(removeUser())
            }
            return res.json()    
        }).then(res=>favoriteDispatch(setFavorite(res.product_id)))
            :null
        },[])
        

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
                        {products.length<1?
                        <h1 className="text-white text-3xl col-span-4 text-center">Not found Products</h1>:
                        products.map(product=>{
                            const filter=cart.some(e=>e._id==product._id)
                            const filterFav=favorite.some(e=>e._id==product._id)
                            return(
                                <article key={product._id} className="bg-black/70 rounded-md flex flex-col items-center py-3 px-10 gap-4 text-white/80 relative z-0">
                                    <div className="-mt-10 w-60 h-60 overflow-hidden grid place-content-center">
                                        <img src={`${product.image}`} alt={`${product.description}`}  />
                                    </div>
                                    <div className="mb-5 flex flex-col items-center gap-4">
                                        <h1 className="text-white">{product.name}</h1>
                                        <h2 className="text-center">{product.description}</h2>
                                        <span className="text-green-700 text-xl">{product.price}$</span>
                                    </div>
                                        <button key={product._id+"b"} className="flex gap-5 mb-5" onClick={()=>{return filter?productDispatch(removeCart(product._id)):productDispatch(addCart(product))}}>
                                            <div className={` rounded-full border-2 ${filter?'border-red-800 text-red-600':'border-green-800 text-green-600'}`}>
                                                <Plus/>
                                            </div>    
                                            <p>{filter?'Remove Cart':'Add Cart'}</p>
                                            </button>
                                            {user.token?
                                            <div className={`absolute z-50 top-4 right-4`}>
                                                <ButtonFavorite product={product} filterFav={filterFav} favoriteDispatch={favoriteDispatch}/>
                                            </div>:
                                            null     
                                            }
                                </article>
                            )
                        })}
                    </div>
    )
}