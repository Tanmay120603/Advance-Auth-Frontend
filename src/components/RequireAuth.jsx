import { useContext } from "react"
import { UserAuthContext } from "../context/UserAuth"
import { Navigate } from "react-router-dom"

function RequireAuth({children}){
    const {user,setUser}=useContext(UserAuthContext)

    if(!user.is_auth){
        return (
            <Navigate to={"/login"} replace={true} state={{redirectPath:window.location.pathname}}></Navigate>
        )
    }

    return(
        <>
        {children}
        </>
    )
}

export default RequireAuth