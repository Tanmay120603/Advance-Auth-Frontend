import axios from "axios"
import { useState } from "react"

function useGetData(loadingInitialState){
    const [isLoading,setIsLoading]=useState(loadingInitialState)

    async function getData(url){
        try {
            setIsLoading(true)
            const response=await axios.get(url,{withCredentials:true})
            return {error:null,data:response.data}
        } 
        catch (error) {
            const errObj=error.response?.data || {message:"Network Problem"}
            return {error:errObj,data:null}
        }
        finally{
            setIsLoading(false)
        }
    }
    return {isLoading,getData}
}

export default useGetData