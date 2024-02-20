import { useSelector } from "react-redux";
import { Heart } from "../icons/heart";
import { FetchFavoriteAdd, FetchFavoriteDelete } from "../services/favorite";
import { IStore } from "../store/ConfigureStore";
import { useState } from "react";

export function ButtonFavorite({product_id}:{product_id:string}) {

    const user=useSelector((state:IStore)=>state.user)
    const [fav,setFav]=useState(false)

    const handleAddFavorite=async()=>{
        const token=user.token
        FetchFavoriteAdd({token,product_id}).then(data=>console.log(data))
        setFav(!fav)
    }
    const handleDeleteFavorite=async()=>{
        const token=user.token
        FetchFavoriteDelete({token,product_id}).then(data=>console.log(data))
        setFav(!fav)
    }

    return(
        <button  onClick={fav?handleDeleteFavorite:handleAddFavorite} className={`hover:scale-125 transition-all ${fav?'hover:text-white text-red-500':'hover:text-red-500 text-white'}`}>
            <Heart/>
        </button>
    )
}