import { useSelector } from "react-redux";
import { Heart } from "../icons/heart";
import { FetchFavoriteAdd, FetchFavoriteDelete } from "../services/favorite";
import { IStore } from "../store/ConfigureStore";
import { Dispatch } from "@reduxjs/toolkit";
import { addFavorite, deleteFavorite } from "../store/favoriteReducer";
import { IProduct } from "../types/product.d";


export function ButtonFavorite({product,filterFav,favoriteDispatch}:{product:IProduct,filterFav:boolean,favoriteDispatch:Dispatch}) {

    const user=useSelector((state:IStore)=>state.user)

   
    const handleAddFavorite=async()=>{
        const token=user.token
        FetchFavoriteAdd({token,product_id:product._id}).then(data=>console.log(data))
        favoriteDispatch(addFavorite(product))
    }
    const handleDeleteFavorite=async()=>{
        const token=user.token
        FetchFavoriteDelete({token,product_id:product._id}).then(data=>console.log(data))
        favoriteDispatch(deleteFavorite(product))
    }

    return(
        <button  onClick={filterFav?handleDeleteFavorite:handleAddFavorite} className={`hover:scale-125 transition-all ${filterFav?'hover:text-white text-red-500':'hover:text-red-500 text-white'}`}>
            <Heart/>
        </button>
    )
}