import { useEffect, useState } from "react"
import { IProduct } from "../types/product.d"
import { useDispatch } from "react-redux"
import { addCart, removeCart } from "../store/cartReducer"

export function SectionOne({cart,product}:{cart:IProduct[],product:IProduct[]}) {
    const [first,setFirst]=useState([] as IProduct[])
    const [dialog,setDialog]=useState(false)
    const useCart=useDispatch()
    
      const handleDialog=( )=>{
        setDialog(!dialog)
      }
      useEffect(()=>{
          const one=[...product][0]
          setFirst([one])
        },[])
  
    return(
        <section  className="bg-black/50 rounded-md py-10 lg:px-36 px-10 w-full lg:h-[400px] h-[500px]">  
                            <div className="flex lg:flex-row flex-col relative w-full h-full items-center">
                            {first.map(product=>{
                                const filter=cart.some(e=>e._id==product._id)
                                return(
                                    <>
                                    <div className="flex flex-col w-full gap-10 lg:items-start text-white/70 lg:order-1 order-2 items-center">
                
                                        <div>
                                            <h1 className="lg:text-6xl text-4xl  text-white mb-3">{product.name}</h1>
                                            <div className="w-36 h-0 border border-black/40"></div>
                                             <p className="mt-5">{product.description}</p>
                                        </div>
                                        <div className="flex gap-5 lg:flex-row flex-col">
                                            <button className={`lg:py-4 py-2 lg:px-10 px-5 ${filter?'bg-[#752a2a] ':'bg-[#895bd3]'} text-white rounded-full lg:text-lg text-sm`} onClick={()=>{return filter?useCart(removeCart(product._id)):useCart(addCart(product))}}>{filter?'Remove Cart':'Add Cart'}</button>
                                            <button className="lg:py-4 py-2 lg:px-10 px-5 bg-transparent border-white/50 border-[1px] text-white rounded-full lg:text-lg text-sm " onClick={handleDialog}>See more</button>
                                        </div>
                                    </div>
                                    <img src={`${product.image}`} alt={`${product.description}`} className="lg:absolute -top-20 right-20  static lg:w-2/5 w-4/5 lg:order-2 order-1"/>
                                    </>
                                )
                            })}
                            </div>
                            {dialog
                            ?<div className="w-screen h-screen bg-black/70 fixed top-0 left-0 backdrop-blur backdrop-filter-[10px] z-50 grid place-content-center cursor-pointer" onClick={()=>setDialog(!dialog)}>
                                    {first.map(product=>{
                                        return(
                                            <div className="flex flex-col gap-10 items-center text-white/70 mx-auto max-w-[700px]"  >
                                                <img src={`${product.image}`} alt={`${product.description}`} className=""/>
                                                <div className="flex flex-col items-center">
                                                    <h1 className="text-6xl text-white mb-3">{product.name}</h1>
                                                    <p className="mt-5">{product.description}</p>
                                                </div>
                                            </div>
                                           
                                        )
                                    })}
                                
                                </div>
                                :<></>}
            </section>
    )
}