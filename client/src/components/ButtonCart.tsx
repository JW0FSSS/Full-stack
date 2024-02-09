import { Cart } from "../icons/cart"
import { Cancel } from "../icons/cancel"

export function ButtonCart({open,setOpen}:{open:boolean,setOpen:React.Dispatch<React.SetStateAction<boolean>>}){
    return<button className={`fixed bottom-5 right-5 ${open?'bg-red-700/70 z-20':'bg-white/90'} rounded-full p-3`} onClick={()=>setOpen(!open)}>{open?<Cancel/>:<Cart />}</button>
}