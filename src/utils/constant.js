const signUpInputs=[{id:1,label:"User Name",name:"username",type:"text",isRequired:true},{id:2,label:"Email",type:"email",name:"email",isRequired:true},{id:3,label:"Password",name:"password",type:"password",isRequired:true},{id:4,label:"Confirm Password",type:"password",name:"cpassword",isRequired:true}]

const logInInputs=[{id:1,label:"Email",type:"email",name:"email",isRequired:true},{id:2,name:"password",label:"Password",type:"password",isRequired:true}]

const resetPasswordInputs=[{id:1,label:"Password",name:"password",type:"password",isRequired:true},{id:2,label:"Confirm Password",type:"password",name:"cpassword",isRequired:true}]

const changePasswordInputs=[{id:1,label:"Old Password",name:"old_password",type:"password",isRequired:true},{id:2,label:"New Password",type:"password",name:"new_password",isRequired:true}]

const loggedInNavItems=[{itemName:"Home",path:"/"},{itemName:"Contact Us",path:"/contact"},{itemName:"About Us",path:"/about"},{itemName:"Profile",path:"/profile"}]

const loggedOutNavItems=[{itemName:"Home",path:"/"},{itemName:"Contact Us",path:"/contact"},{itemName:"About Us",path:"/about"},{itemName:"Login",path:"/login"},{itemName:"Sign Up",path:"/signup"}]

const toastOptionsObj={
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "light",
}

const authPath=["/login","/signup","/verify-otp","/password-reset"]

export {signUpInputs,toastOptionsObj,logInInputs,changePasswordInputs,resetPasswordInputs,loggedInNavItems,loggedOutNavItems,authPath}