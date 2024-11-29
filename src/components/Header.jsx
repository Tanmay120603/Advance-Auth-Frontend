import { useContext, useEffect, useState } from "react"
import { UserAuthContext } from "../context/UserAuth"
import { loggedInNavItems,loggedOutNavItems } from "../utils/constant"
import {Logout} from "./index.js"
import { NavLink } from "react-router-dom"

function Header(){
    
    const {user,setUser}=useContext(UserAuthContext)
    const [navItems,setNavItems]=useState(user.is_auth ? loggedInNavItems : loggedOutNavItems)

    useEffect(()=>{
        setNavItems(user.is_auth ? loggedInNavItems : loggedOutNavItems)
    },[user.is_auth])

    return(
        <>
        <div className="w-full fixed top-0 max-w-full z-40 flex items-center bg-blue-500 h-[45px] text-white">
            <nav className="flex justify-between w-full items-center ">
                <ul className={`w-[80%] ${user.is_auth || "w-full"}  md:w-[40%] flex justify-evenly items-center`}>
                    {navItems.map((navItem,index)=><NavLink to={navItem.path} key={index}><li>{navItem.itemName}</li></NavLink>)}
                </ul>
                {user.is_auth && <Logout></Logout>}
            </nav>
        </div>
    </>
    )
}

export default Header