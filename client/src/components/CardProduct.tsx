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
                                <article key={product._id} className="bg-[#28282a] rounded-md flex flex-col group items-center hover:shadow-md py-3 px-10 gap-4 text-white/80 relative border-[1px] border-transparent z-0  hover:border-white/80 transition-color ease-in-out ">
                                    <div className="-mt-10 w-60 h-60 overflow-hidden grid place-content-center">
                                        <img src={`${product.image}`} alt={`${product.description}`}  />
                                    </div>
                                    <div className="mb-5 flex flex-col items-center gap-4">
                                        <h1 className="text-white font-bold">{product.name}</h1>
                                        <h2 className="text-center">{product.description}</h2>
                                        <span className="text-[#9965f0] text-xl font-semibold">{product.price}$</span>
                                    </div>
                                        <button key={product._id+"b"} className="flex gap-5 mb-5" onClick={()=>{return filter?productDispatch(removeCart(product._id)):productDispatch(addCart(product))}}>
                                            <div className={` rounded-full border-[1px]    ${filter?'border-[#b94747] text-[#b94747] group-hover:bg-[#b94747] group-hover:text-white':'border-[#9965f0] text-[#9965f0] group-hover:text-white group-hover:bg-[#9965f0]'}`}>
                                                <Plus/>
                                            </div>    
                                            <p className="text-white font-semibold">{filter?'Remove Cart':'Add to Cart'}</p>
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