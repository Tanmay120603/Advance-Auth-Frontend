import { useState } from "react"
import { Button, Input } from "../components"
import { resetPasswordInputs, toastOptionsObj } from "../utils/constant"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import usePostData from "../hooks/usePostData"

function ResetPassword(){

    const navigate=useNavigate()
    const [resetPasswordData,setResetPasswordData]=useState({password:"",cpassword:""})
    const {token}=useParams()
    const {isLoading,postData}=usePostData({loadingInitialState:false})

    async function handleSubmit(e){
        e.preventDefault()
        const {password,cpassword}=resetPasswordData 
        if(!password || !cpassword)return toast.error("All fields are required",toastOptionsObj)
        if(password !==cpassword)return toast.error("Password does not match",toastOptionsObj)
        
        try {
            const {data,error}=await postData(import.meta.env.VITE_SERVER_URL+"/api/user/password-reset",{resetToken:token,new_password:password})
            if(error)throw error
            toast.success("Password is reset successfully",toastOptionsObj)
            navigate("/login",{replace:true})
        } 
        catch (error) {
            toast.error(error.message,toastOptionsObj)    
        }
    }

    function handleChange(e){
        setResetPasswordData({...resetPasswordData,[e.target.name]:e.target.value.trim()})
    }

    return(
        <div className="w-full h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-[30%] flex flex-col gap-5 h-fit p-8 rounded bg-white border border-blue-600">
                {resetPasswordInputs.map(resetPasswordInput=><Input key={resetPasswordInput.id} value={resetPasswordData[resetPasswordInput.name]} {...resetPasswordInput} eventHandler={handleChange}></Input>)}
                <Button loading={isLoading} text="Reset password" eventHandler={handleSubmit}></Button>
            </form>
        </div>
    )
}

export default ResetPassword