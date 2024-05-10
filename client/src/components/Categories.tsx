import { useDispatch } from "react-redux";
import { Game } from "../icons/game";
import { ICategory } from "../store/categoryReducer";
import { setProductsFilter } from "../store/productReducer";

export function CategorieS({categories}:{categories:ICategory[]}) {

    const dispatch=useDispatch()

    const handleFilter=(id:number|string)=>{
        const stringify= localStorage.getItem("_products_")
        const products=JSON.parse(stringify)
        const profuctsFilter=products.filter(product=>product.categories_id?.some(e=>e==id))
 
        dispatch(setProductsFilter(profuctsFilter))
    }

    return (
        categories.map((category) => {
            return (
              <button key={category._id} className="flex gap-5" onClick={()=>handleFilter(category._id)}>
                <Game /> <p>{category.name}</p>
              </button>
            );
          })
    )
}