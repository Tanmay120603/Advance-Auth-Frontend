import axios from "axios"
import { useRef, useState } from "react"
import { toast } from "react-toastify"
import { toastOptionsObj } from "../utils/constant"
import getLocalStorage from "../utils/getLocalStorage"
import setLocalStorage from "../utils/setLocalStorage"
import { useNavigate } from "react-router-dom"
import { EmailDialog } from "../components"
import usePostData from "../hooks/usePostData"

function VerifyOtp(){
    
    const [otpArr,setOtpArr]=useState(()=>new Array(4).fill(""))
    const [openEmailDialog,setOpenEmailDialog]=useState(false)
    const emailValref=useRef(getLocalStorage("email"))
    const navigate=useNavigate()
    const {postData}=usePostData({loadingInitialState:false})

    function handleChange(index,e){
        //Checking if user wants to remove a number if yes storing "" and providing an early return
        if(e.target.value===""){
            const cloneArr=[...otpArr]
            cloneArr[index]=""
            return setOtpArr(cloneArr)
        }

        const inputVal=Number(e.target.value)
        if(inputVal < 0 || inputVal > 9)return
        const cloneArr=[...otpArr]
        cloneArr[index]=String(inputVal)
        setOtpArr(cloneArr)
        const nextElement=e.target.nextElementSibling || {}
        if(nextElement.tagName!=="INPUT")return
        nextElement.focus()       
    }

    async function handleResend(e){
        try {
            e.target.textContent="Loading..."
            const {data,error}=await postData(import.meta.env.VITE_SERVER_URL+'/api/user/resend-otp',{email:emailValref.current})
            if(error)throw error
            toast.success(data?.message,toastOptionsObj)
        } 
        catch (error) {
            toast.error("Something went wrong! please try again",toastOptionsObj)
        }
        finally{
            e.target.textContent="Resend Otp"
        }
    }

    async function handleVerifyOtp(e){
        if(!(otpArr.every(otpVal=>otpVal!=="")))return toast.error("Please enter valid otp",toastOptionsObj)
        try {
            e.target.textContent="Loading..."
            const otp=Number(otpArr.join(""))
            const {data,error}=await postData(import.meta.env.VITE_SERVER_URL+"/api/user/verify-otp",{email:emailValref.current,otp})
            if(error)throw error
            toast.success("Verification complete! Now do login",toastOptionsObj)
            navigate("/login",toastOptionsObj)    
        } 
        catch (error) {
            if(error.emailReset){
                setOpenEmailDialog(true)
                return toast.error(error.message,toastOptionsObj)
            }
            if(error.userVerified){
                toast.error("Already verified! Please login to your account",toastOptionsObj)
                return navigate("/login",{replace:true})
            }
            toast.error(error.message,toastOptionsObj)
        }
        finally{
            e.target.textContent="Verify Otp"
        }
    }

    function handleDialogSubmit (emailRef,closeDialog){
        if(closeDialog)return setOpenEmailDialog(false)
        setLocalStorage("email",emailRef.current.value)
        emailValref.current=emailRef.current.value
        setOpenEmailDialog(false)
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
            <h1 className="mb-4 font-serif font-semibold text-blue-800 text-xl">Verify your email by otp</h1>
            <div className="flex space-x-2 mb-4">
                {otpArr.map((val,index)=><input className="w-16 h-16 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" key={index} type="number" value={val} onChange={(e)=>handleChange(index,e)}/>)}
            </div>
            <div className="space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600" onClick={handleResend}>Resend Otp</button>
            <button onClick={handleVerifyOtp} className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">Verify Otp</button>
            </div>
            {openEmailDialog && <EmailDialog submitAndProcessData={handleDialogSubmit}></EmailDialog>}
        </div>
    )
}

export default VerifyOtp