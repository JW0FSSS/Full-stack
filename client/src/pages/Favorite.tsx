import { useEffect } from "react"
import { FetchFavorite } from "../services/favorite"
import { useDispatch, useSelector } from "react-redux"
import { addFavorite } from "../store/favoriteReducer"
import { IStore } from "../store/ConfigureStore"

export function Favorite() {

    const favorite=useSelector((state:IStore)=>state.favorite)
    const favoriteDispatch=useDispatch()
    useEffect(()=>{
        FetchFavorite({user_id:'65c3eb7f8d3d22964b071164'})
        .then(data=>{
            favoriteDispatch(addFavorite(data.product_id))
        }
        )
    },[])
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {favorite.map(product=>{
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
                                    
                                </article>
                            )
                        })}
                    </div>
        </>
    )
}


