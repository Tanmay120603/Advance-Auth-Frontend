import { useContext, useState } from "react"
import { changePasswordInputs, toastOptionsObj } from "../utils/constant"
import Input from "./Input"
import Button from "./Button"
import { toast } from "react-toastify"
import { UserAuthContext } from "../context/UserAuth"
import usePostData from "../hooks/usePostData"

function ChangePasswordDialog({setOpenDialog}){

    const [changePasswordData,setChangePasswordData]=useState({old_password:"",new_password:""})
    const {user,setUser}=useContext(UserAuthContext)
    const {isLoading,postData}=usePostData({loadingInitialState:false})

    function handleChange(e){
      setChangePasswordData({...changePasswordData,[e.target.name]:e.target.value.trim()})  
    }

    function handleClose(){
        setOpenDialog(false)
    }

    async function handleSubmit(e){
        e.preventDefault()
        if(!changePasswordData.new_password || !changePasswordData.old_password)return toast.error("All fields are required",toastOptionsObj)
        try {
            const {data,error}=await postData(import.meta.env.VITE_SERVER_URL+"/api/user/change-password",{...changePasswordData})
            if(error)throw error
            toast.success("Password changed successfully",toastOptionsObj)
            setOpenDialog(false)
        } 
        catch(error) {
            if(error.is_unauth){
                setUser({})
                setOpenDialog(false)
            }
            toast.error(error.message,toastOptionsObj)
        }      
    }

    return(
        <div className="w-full absolute bg-black bg-opacity-25 z-40 h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-[400px] px-5 pt-20 pb-20 border flex flex-col gap-4 relative border-blue-600 bg-white rounded">
                {changePasswordInputs.map(changePasswordInput=><Input key={changePasswordInput.id} eventHandler={handleChange} {...changePasswordInput}></Input>)}
                <Button loading={isLoading} text="Change password"></Button>
                <button type="button" onClick={handleClose} className="absolute bg-white text-red-600 py-1 px-3 text-2xl rounded-full hover:bg-red-50 top-1 right-1">X</button>
            </form>
        </div>
    )
}

export default ChangePasswordDialog