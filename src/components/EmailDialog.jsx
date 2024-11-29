import { useRef } from "react"
import { toast } from "react-toastify"
import { toastOptionsObj } from "../utils/constant"
import { Button } from "./index.js"

function EmailDialog({submitAndProcessData,isLoading}){
    
    const emailRef=useRef()

    function handleSubmit(e){
        e.preventDefault()
        if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailRef.current.value)))return toast.error("Please enter valid email",toastOptionsObj)
        submitAndProcessData(emailRef)   
    }

    function handleClose(){
        submitAndProcessData(null,true)
    }

    return(
        <div className="w-full h-full z-20 absolute top-0 bg-black bg-opacity-50 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-white relative flex flex-col justify-center items-center gap-3 h-[30%] w-[30%] rounded border-2 border-blue-800">
                <label htmlFor="emailReset" className="font-serif font-semibold text-blue-800">Please enter your email</label>
                <input id="emailReset" ref={emailRef} className="w-[70%] border border-black rounded p-2" type="text" placeholder="Enter your email" />
                <div className="w-[100px]">
                    <Button text="Reset" loading={isLoading} eventHandler={handleSubmit}></Button>
                </div>
                <button type="button" onClick={handleClose} className="absolute bg-white text-red-600 py-1 px-3 text-2xl rounded-full hover:bg-red-50 top-1 right-1">X</button>
            </form>
        </div>
    )
}

export default EmailDialog