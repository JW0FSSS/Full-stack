import { useDispatch, useSelector } from "react-redux";
import { AsideCart } from "./AsideCart";
import { ButtonCart } from "./ButtonCart";
import { CardProduct } from "./CardProduct";
import { Header } from "./Header";
import { SectionOne } from "./SectionOne";
import { IStore } from "../store/ConfigureStore";
import { useEffect, useState } from "react";
import { setProducts } from "../store/productReducer";
import { GetProducts } from "../services/products";

export function Main() {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state: IStore) => state.cart);
  const [loading, setLoading] = useState(true);
  const productDispatch=useDispatch()

  useEffect(()=>{
    GetProducts({limit:8,filter:''}).then(products=>{
      setLoading(false)
        productDispatch(setProducts(products))        
})    
    },[])

  return (
    <section className="md:ml-80 pl-10 pr-14 pt-7 pb-10 bg-black/80 min-h-screen">
      <ButtonCart open={open} setOpen={setOpen} />
      <AsideCart open={open} />
      <Header />

      <main>
        <SectionOne cart={cart} loading={loading}/>
        <section>
          <div className="my-10 flex gap-8">
            <h1 className="text-2xl text-white">Our products</h1>
            <div className="flex gap-4 items-center"></div>
          </div>
          <CardProduct cart={cart} loading={loading}/>
        </section>
      </main>
    </section>
  );
}


