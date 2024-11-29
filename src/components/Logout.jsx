import axios from "axios"
import { toast } from "react-toastify"
import { toastOptionsObj } from "../utils/constant"
import { useContext } from "react"
import { UserAuthContext } from "../context/UserAuth"

function Logout(){

    const {setUser}=useContext(UserAuthContext)

    async function handleLogout(){
        try{
            const response=await axios.post(import.meta.env.VITE_SERVER_URL+"/api/user/logout",{},{withCredentials:true})
            toast.success("Logged out successfully",toastOptionsObj)
            setUser({})
        }
        catch(err){
            const errObj=err.response?.data || {message:"Network problem"}
            toast.error(errObj.message,toastOptionsObj)
        }
    }

    return(
        <button className="bg-white text-blue-500 border border-blue-700 rounded py-1 px-2 mr-2 md:mr-7 hover:bg-blue-50" onClick={handleLogout}>Logout</button>
    )
}

export default Logout