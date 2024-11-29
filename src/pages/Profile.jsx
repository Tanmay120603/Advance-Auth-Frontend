import { useContext, useState } from "react"
import { UserAuthContext } from "../context/UserAuth"
import { ChangePasswordDialog, Logout } from "../components"

function Profile(){
    
    const {user,setUser}=useContext(UserAuthContext)
    const [openChangePassDialog,setOpenChangePassDialog]=useState(false)

    function handleClick(){
        setOpenChangePassDialog(true)
    }

    return(
        <div className="w-full h-screen flex justify-center gap-4 flex-col items-center">
            <p>Username : {user.username}</p>
            <p>Email : {user.email}</p>
            <div className="flex gap-6">
                <button className="border border-blue-700 text-blue-500 py-1 px-2 rounded hover:bg-blue-50" onClick={handleClick}>Change Password</button>
                <Logout></Logout>
            </div>
            {openChangePassDialog && <ChangePasswordDialog setOpenDialog={setOpenChangePassDialog}></ChangePasswordDialog>}
        </div>
    )
}

export default Profile