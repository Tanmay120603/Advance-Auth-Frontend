import { Outlet } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import { AuthalertDialog, Header, Loader } from "../components"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { UserAuthContext } from "../context/UserAuth"
import { authPath } from "../utils/constant"
import useGetData from "../hooks/useGetData"

function RootLayout(){

    const {user,setUser}=useContext(UserAuthContext)
    const {isLoading,getData}=useGetData(true)
    const [dialogLoading,setDialogLoading]=useState(false)
    const [isAlertDialogOpen,setIsAlertDialogOpen]=useState(false)

    function dialogTimer(){
        setDialogLoading(true)
        setTimeout(()=>{
            setDialogLoading(false)
            if(authPath.some(path=>window.location.pathname.includes(path)))return
            setIsAlertDialogOpen(true)
        },1500) 
    }

    async function getUser(){
        try{
            const {data,error}=await getData(import.meta.env.VITE_SERVER_URL+"/api/user/")
            if(error)throw error
            setUser(data)
        }
        catch (error){
            if(error.is_unauth)return dialogTimer()
        }
    }

    useEffect(()=>{
        getUser()
    },[])

    if(isLoading)return(
        <>
        <Header></Header>
        <Loader></Loader>
        </>
    )

    return(
        <div>
            <Header></Header>
            <AuthalertDialog loading={dialogLoading} showClose={true} showDialog={isAlertDialogOpen} setShowDialog={setIsAlertDialogOpen}></AuthalertDialog>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default RootLayout