import { useSelector } from "react-redux"
import { IStore } from "../store/ConfigureStore"
import { Navigate } from "react-router"

export function Protected({children}) {

    const user=useSelector((state:IStore)=>state.user)

    return user.username?children:<Navigate to={'/login'} replace={true}/>
}