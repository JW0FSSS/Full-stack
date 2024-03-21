import { useDispatch, useSelector } from "react-redux";
import { AsideCart } from "./AsideCart";
import { ButtonCart } from "./ButtonCart";
import { CardProduct } from "./CardProduct";
import { Header } from "./Header";
import { SectionOne } from "./SectionOne";
import { IStore } from "../store/ConfigureStore";
import { useEffect, useState } from "react";
import {  setProducts } from "../store/productReducer";
import { Spinner } from "./spinner/spiner";
import { GetProducts } from "../services/products";

export function Main() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(50);
  const cart = useSelector((state: IStore) => state.cart);
  const product = useSelector((state: IStore) => state.products);
  const [loading, setLoading] = useState(true);
  const productDispatch=useDispatch()

  useEffect(()=>{
    GetProducts({limit:8,filter:''}).then(products=>{
      setLoading(false)
        productDispatch(setProducts(products))        
})    
    },[])

if (loading) {
  setInterval(()=>{
    setTime(time-1)
  },1000)
  return <h1 className="text-center text-white">wait {time} seconds....</h1>
}
  return (
    <section className="md:ml-80 pl-10 pr-14 pt-7 pb-10 bg-black/80 min-h-screen z-10">
      <ButtonCart open={open} setOpen={setOpen} />
      <AsideCart open={open} />
      <Header />

      <main>
        <SectionOne cart={cart} product={product}/>
        <section>
          <div className="my-10 flex gap-8">
            <h1 className="text-2xl text-white">Our products</h1>
            <div className="flex gap-4 items-center"></div>
          </div>
          <CardProduct cart={cart}  product={product}/>
        </section>
      </main>
    </section>
  );
}


