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
import { GetProductsMock } from "../servicesMock/productsMock.";
import { GetProducts } from "../services/products";

export function Main() {
  const [open, setOpen] = useState(false);
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
  return <h1 className="text-center text-black"><Spinner/></h1>
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


