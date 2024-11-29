function validation(formData,errorObj){
    let isError=false

    if(formData.username!==undefined && !(/^[0-9A-Za-z]{6,16}$/.test(formData.username))){
        errorObj.username="Username can have alpha-numeric value and length must be in between 6 to 16 characters"
        isError=true
    }

    if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(formData.password))){
        errorObj.password="Invalid password, use correct format"
        isError=true
    }
    if(formData.cpassword !==undefined && formData.cpassword!==formData.password){
        errorObj.cpassword="Password does not match"
        isError=true
    }
  
    return {isError,errorObj}
}

export default validation

//Legacy code if someone doesn't want to use html required and type attributes for validation

// if(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))){
//     errorObj.email="Please enter a valid email"
//     isError=true
// }
// if(formData.cpassword==""){
//     errorObj.cpassword="Confirm password can't be empty"
//     isError=true
// }