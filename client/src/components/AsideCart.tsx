import { useDispatch, useSelector } from "react-redux"
import { IStore } from "../store/ConfigureStore"
import { addCart, removeOneCart } from "../store/cartReducer"
import { Plus } from "../icons/plus"
import { Minus } from "../icons/Minis"

export function AsideCart({open}:{open:boolean}) {
    const cartDispatch=useDispatch()
    const cart= useSelector((state:IStore)=>state.cart)

    return(
            open
            ?<div className="fixed z-10 flex flex-col top-0 bottom-0 right-0 w-72 bg-black/80 px-5">
            {cart.map(product=>
                <article key={product._id} className="bg-black/70 flex flex-col items-center my-3 px-10 gap-4 text-white/80 rounded-xl">
                                <div className="w-32 h-32 overflow-hidden grid place-content-center">
                                    <img src={`${product.image}`} alt={`${product.description}`}/>
                                </div>
                                <div className="mb-5 flex flex-col items-center gap-4">
                                    <h1 className="text-white">{product.name}</h1>
                                    <h2 className="text-center">{product.description}</h2>
                                    <span className="text-[#895bd3] text-md">Price: {product.price}$</span>
                                    <div className="flex gap-4">
                                        <span className=" text-md">quantity: {product.quantity}</span>
                                            <button className='rounded-full border' onClick={()=>cartDispatch(addCart(product))}>
                                                <Plus/>
                                            </button>
                                        <button className='rounded-full border' onClick={()=>cartDispatch(removeOneCart(product._id))}>
                                            <Minus/>
                                            </button>
                                    </div>
                                </div>
                    </article>
                )}
            </div>
            :<></>)
        }
    