import { useDispatch, useSelector } from "react-redux"
import { IStore } from "../store/ConfigureStore"
import { FetchPay } from "../services/Pay"
import { clearCart } from "../store/cartReducer"

export function Cart() {

    const cart=useSelector((state:IStore)=>state.cart)
    const cartDispatch=useDispatch()

    const handlePay=((e:React.MouseEvent<HTMLButtonElement>)=>{
        FetchPay({cart}).then(data=>{
            data?window.location.href=data:console.log('error');
            cartDispatch(clearCart())
        })
    })

    return(
        <section className="w-full min-h-screen bg-black/80 text-white/70 pt-20 ">
            <main className="max-w-[1000px] flex flex-col mx-auto  relative">
            <div className="grid grid-cols-5 my-10 place-items-center">
                <h2>Product</h2>
                <h2>Name</h2>
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>Total</h2>
            </div>
            {cart.map(product=>{
                return(
                    <article className="grid grid-cols-5 place-items-center">
                        <picture className="w-40">
                            <img src={`${product.image}`} alt={`${product.description}`} />
                        </picture>
                        
                            <h1>{product.name}</h1>
                            <h2>{product.price}</h2>
                            <h2>{product.quantity}</h2>
                            <h2>{product.quantity*product.price}</h2>
                    </article>
                )
            })}
            <div className="grid grid-cols-5">
                <p className="w-full my-10 col-start-5 text-center text-xl">${cart.reduce((prev,current)=>prev+(current.price*current.quantity),0)}</p>
            </div>
              <button className="absolute top-8 -right-20 bg-green-800 p-2 rounded-full" onClick={handlePay}>Pay Here</button>
            </main>
           
        </section>
    )
}