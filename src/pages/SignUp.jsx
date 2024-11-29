import { signUpInputs, toastOptionsObj } from "../utils/constant"
import { Input,Button,SocialAuthButtons } from "../components"
import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import validation from "../utils/validation.js"
import { toast } from "react-toastify"
import setLocalStorage from "../utils/setLocalStorage.js"
import usePostData from "../hooks/usePostData.jsx"

function SignUp(){

    const initialState={username:"",email:"",password:"",cpassword:""}

    const [signUpData,setSignUpData]=useState({...initialState})

    const [errObj,setErrObj]=useState({...initialState})

    const navigate=useNavigate()

    const {isLoading,postData}=usePostData({loadingInitialState:false})

    async function handleSubmit(e){
        e.preventDefault()
        //Validating input data if input data not valid providing an early return
        const {isError,errorObj}=validation(signUpData,{...initialState})
        setErrObj(errorObj)
        if(isError)return 

        //Handling signup process

        try{
            const {data,error}=await postData(import.meta.env.VITE_SERVER_URL+"/api/user/signup",{...signUpData})
            if(error)throw error
            toast.success("Sign-up successful! Please check your email to verify your OTP.",toastOptionsObj)
            setLocalStorage("email",signUpData.email)
            navigate("/verify-otp",{replace:true})
        }
        catch(error){
            toast.error(error.message,toastOptionsObj)
        }
    }

    function handleChange(e){
        setSignUpData({...signUpData,[e.target.name]:e.target.value})
    }

    return(
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-poppins text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        {signUpInputs.map(signUpInput=><Input key={signUpInput.id} {...signUpInput} value={signUpData[signUpInput.name]} error={errObj[signUpInput.name]} eventHandler={handleChange}></Input>)}
                        <Button loading={isLoading} text="Sign Up"></Button>
                        <p className="text-red-500"></p>
                        <p className="text-sm font-light relative font-poppins text-gray-500 dark:text-gray-400">
                            Already have an account? <Link className="font-medium text-blue-600 hover:underline dark:text-primary-500" to="/login">Login here</Link>
                            <Link to={"/verify-otp"} className="hover:cursor-pointer text-white bg-blue-600 p-2 rounded absolute right-2 text-[14px] hover:bg-blue-700 font-medium -top-2">Verify email</Link>
                        </p>
                    </form>
                    <SocialAuthButtons></SocialAuthButtons>
                </div>
            </div>
        </div>
      </section>
    )
}

export default SignUp