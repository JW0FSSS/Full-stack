import { useSelector } from "react-redux"
import { AsideCart } from "./AsideCart"
import { ButtonCart } from "./ButtonCart"
import { CardProduct } from "./CardProduct"
import { Header } from "./Header"
import { SectionOne } from "./SectionOne"
import { IStore } from "../store/ConfigureStore"
import { useState } from "react"

export function Main() {

    const [open,setOpen]=useState(false)
    const cart= useSelector((state:IStore)=>state.cart)
   
    return(
        <section className="ml-80 pl-10 pr-14 pt-7 pb-10 bg-black/70">
            
            <ButtonCart open={open} setOpen={setOpen}/>
            <AsideCart open={open}/>
            <Header/>
                
            <main>
                <SectionOne cart={cart}/>
                <section>
                    <div className="my-10 flex gap-8">
                        <h1 className="text-2xl text-white">Our products</h1>
                        <div className="flex gap-4 items-center"> 
                            <span className="border border-black text-white py-2 px-12 rounded-full">top</span>
                            <span className="border border-black text-white py-2 px-12 rounded-full">top</span>
                            <span className="border border-black text-white py-2 px-12 rounded-full">top</span>
                        </div>
                    </div>
                    <CardProduct cart={cart}/>
                </section>
            </main>

        </section>
    )
}