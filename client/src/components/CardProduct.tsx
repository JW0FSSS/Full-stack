import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IStore } from "../store/ConfigureStore"
import { addCart, removeCart } from "../store/cartReducer"
import { GetProducts } from "../services/products"
import { setProducts } from "../store/productReducer"
import { Plus } from "../icons/plus"
import { IProduct } from "../types/product.d"
import { ButtonFavorite } from "./AddFavoriteButton"

export function CardProduct({cart}:{cart:IProduct[]}) {

    const products= useSelector((state:IStore)=>state.products)
    const productDispatch=useDispatch()
    const limit=8

    useEffect(()=>{
        GetProducts({limit}).then(products=>{
          productDispatch(setProducts(products))        
        })
      },[])

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
                        {products.map(product=>{
                            const filter=cart.some(e=>e._id==product._id)
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
                                            <div className={`absolute z-50 top-4 right-4`}>
                                                <ButtonFavorite product_id={product._id}/>
                                            </div>     
                                </article>
                            )
                        })}
                    </div>
    )
}