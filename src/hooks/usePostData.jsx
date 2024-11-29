import axios from "axios"
import { useState } from "react"

function usePostData({loadingInitialState}){

    const [isLoading,setIsLoading]=useState(loadingInitialState)

    async function postData(url,data){
        try{
            setIsLoading(true)
            const response=await axios.post(url,{...data},{withCredentials:true})
            return {data:response.data,error:null}
        }
        catch(err){
            const errObj=err.response?.data || {message:"Network problem"}
            return {data:null,error:errObj}
        }
        finally{
            setIsLoading(false)
        }
    }

    return {postData,isLoading}
}

export default usePostData