import { logInInputs, toastOptionsObj } from "../utils/constant"
import { useContext, useState } from "react"
import { useNavigate,Link, useLocation, Navigate } from "react-router-dom"
import { Input,Button, EmailDialog, SocialAuthButtons } from "../components"
import validation from "../utils/validation"
import { toast } from "react-toastify"
import { UserAuthContext } from "../context/UserAuth"
import usePostData from "../hooks/usePostData"

function Login(){

    const initialState={email:"",password:""}

    const [logInData,setLogInData]=useState({...initialState})

    const [errObj,setErrObj]=useState({...initialState})

    const [openEmailDialog,setOpenEmailDialog]=useState(false)

    const {user,setUser}=useContext(UserAuthContext)

    const navigate=useNavigate()

    const location=useLocation()

    const {isLoading,postData}=usePostData({loadingInitialState:false})

    const redirectPath=location.state?.redirectPath || "/"

    function handleChange(e){
        setLogInData({...logInData,[e.target.name]:e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()
        //Validating input data if input data not valid providing an early return
        const {isError,errorObj}=validation(logInData,{...initialState})
        setErrObj(errorObj)
        if(isError)return

        //Handling login process

        try{
            const {data,error}=await postData(import.meta.env.VITE_SERVER_URL+"/api/user/login",{...logInData})
            if(error)throw error
            toast.success("Login done successfully",toastOptionsObj)
            setUser(data.user)
            navigate(redirectPath,{replace:true})
        }
        catch(error){
            if(error.isOtpRequired){
                toast.error(errObj.message,toastOptionsObj)
                return navigate("verify-otp")
            }
            toast.error(error.message,toastOptionsObj)
        }
    }

    function handleClick(){
        setOpenEmailDialog(true)
    }

    async function sendResetPasswordLink(emailRef,closeDialog){
        if(closeDialog)return setOpenEmailDialog(false)
        try {
            const {data,error}=await postData(import.meta.env.VITE_SERVER_URL+"/api/user/password-reset-link",{email:emailRef.current.value})
            if(error)throw error
            toast.success("Reset password link is sent to your mail!",toastOptionsObj)
            setOpenEmailDialog(false)    
        } 
        catch (error) {
            toast.error(error.message,toastOptionsObj)  
        }
    }

    //Navigating the user back to redirectPath if user is already authenticated
    if(user.is_auth){
        return <Navigate to={redirectPath} replace={true}></Navigate>
    }

    return(
        <section className="bg-gray-50 dark:bg-gray-900">
        {openEmailDialog && <EmailDialog isLoading={isLoading} submitAndProcessData={sendResetPasswordLink}></EmailDialog>}
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-poppins text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login to account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        {logInInputs.map(logInInput=><Input key={logInInput.id} {...logInInput} value={logInInput[logInInput.name]} error={errObj[logInInput.name]} eventHandler={handleChange}></Input>)}
                        <Button text="Login" loading={isLoading}></Button>
                        <p className="text-sm font-light font-poppins relative text-gray-500 dark:text-gray-400">
                            Don't have an account? <Link className="font-medium text-blue-600 hover:underline dark:text-primary-500" to="/signup">Register here</Link>
                            <span onClick={handleClick} className="hover:cursor-pointer absolute right-2 text-[12px] hover:underline text-blue-600 font-medium">Forgot password?</span>
                        </p>
                    </form>
                    <SocialAuthButtons></SocialAuthButtons>
                </div>
            </div>
        </div>
      </section>
    )
}

export default Login