import { useEffect } from "react"
import { GetProducts } from "../services/products"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../store/productReducer"
import { IStore } from "../store/ConfigureStore"


export function Main() {
    const products= useSelector((state:IStore)=>state.products)
    const productDispatch=useDispatch()

    useEffect(()=>{
      GetProducts().then(products=>{
        productDispatch(setProducts(products))        
      })
    },[])

    return(
        <section className="ml-80 pl-10 pr-14 pt-7 pb-10 bg-black/70">
            <header className="w-full flex justify-between mb-10">
                <label htmlFor="">
                    <img src="" alt="" />
                    <input type="text" placeholder="Search...." className="bg-transparent pr-20"/>
                </label>
                <div>

                <p>nombre</p>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                </div>
            </header>

            <main>
                <section className="bg-black/50 rounded-md py-10 px-36 flex relative">
                            {products.map(product=>{
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
                                            <button className="py-4 px-10 bg-black/50 rounded-2xl text-lg ">Add Cart</button>
                                            <button className="py-4 px-10 bg-black/50 rounded-2xl text-lg ">See more</button>
                                        </div>
                                    </div>
                                    <img src={`${product.image}`} alt={`${product.description}`} className="absolute -top-32 right-60 w-2/5"/>
                                    </>
                                )
                            })}
                </section>

                <section>
                    <div className="my-10 flex gap-8">
                        <h1 className="text-2xl text-white">Our products</h1>
                        <div className="flex gap-4 items-center"> 
                            <span className="border border-black text-white py-2 px-12 rounded-full">top</span>
                            <span className="border border-black text-white py-2 px-12 rounded-full">top</span>
                            <span className="border border-black text-white py-2 px-12 rounded-full">top</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {products.map(product=>{
                            return(
                                <article key={product._id} className="bg-black/70 rounded-md flex flex-col items-center py-3 px-10 gap-4 text-white/80">
                                    <img src={`${product.image}`} alt={`${product.description}`} className="-mt-16" />
                                    <div className="mb-5 flex flex-col items-center gap-4">
                                        <h1 className="text-white">{product.name}</h1>
                                        <h2 className="text-center">{product.description}</h2>
                                        <span className="text-green-700 text-xl">{product.price}$</span>
                                    </div>
                                        <button className="">Add Cart</button>
                                </article>
                            )
                        })}
                    </div>
                </section>


            </main>

        </section>
    )
}