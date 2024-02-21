import { useSelector } from "react-redux"
import { IStore } from "../store/ConfigureStore"
import { Navigate } from "react-router"

export function ProtectedAccount({children}:{children:JSX.Element}) {

    const user=useSelector((state:IStore)=>state.user)
    console.log(user.username)
    return !user.username?children:(<Navigate to={'/'} replace={true}/>)
}