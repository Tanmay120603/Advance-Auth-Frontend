import { createContext, useState } from "react"

export const UserAuthContext=createContext()

function UserAuth({children}){
    const [user,setUser]=useState({})
    return(
        <>
            <UserAuthContext.Provider value={{user,setUser}}>
                {children}
            </UserAuthContext.Provider>
        </>       
    )
}

export default UserAuth