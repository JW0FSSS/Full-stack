import { useEffect, useState } from "react"
import { IProduct } from "../types/product.d"
import { useDispatch } from "react-redux"
import { addCart, removeCart } from "../store/cartReducer"
import { GetProductsId } from "../services/products"

export function SectionOne({cart}:{cart:IProduct[]}) {
    const [first,setFirst]=useState([] as IProduct[])
    const useCart=useDispatch()
    
    useEffect(()=>{
        GetProductsId({id:'65c3e8bad48e6c093c71d6a9'}).then(product=>{
            setFirst([product])
        })
      },[])

    return(
        <section className="bg-black/50 rounded-md py-10 px-36 flex relative">
                            {first.map(product=>{
                                const filter=cart.some(e=>e._id==product._id)
                                return(
                                    <>
                                    <div className="flex flex-col w-full gap-10 items-start text-white/70">
                
                                        <div>
                                            <span className="text-4xl ">{product.rate}****</span>
                                            <h1 className="text-6xl text-white mb-3">{product.name}</h1>
                                            <h2 className="text-2xl mb-5">"{product.categories_id}"</h2>
                                            <div className="w-36 h-0 border border-black/40"></div>
                                             <p className="mt-5">{product.description}</p>
                                        </div>
                                        <div className="flex gap-5">
                                            <button className={`py-4 px-10 ${filter?'bg-red-800 ':'bg-green-800'} rounded-2xl text-lg`} onClick={()=>{return filter?useCart(removeCart(product._id)):useCart(addCart(product))}}>{filter?'Remove Cart':'Add Cart'}</button>
                                            <button className="py-4 px-10 bg-black/50 rounded-2xl text-lg ">See more</button>
                                        </div>
                                    </div>
                                    <img src={`${product.image}`} alt={`${product.description}`} className="absolute -top-14 right-60 w-1/3"/>
                                    </>
                                )
                            })}
            </section>
    )
}