import decryptData from "./decryptData"

function getLocalStorage(key){
    const encryptedValue=localStorage.getItem(key)
    if(!encryptedValue)return null
    const decryptedValue=decryptData(encryptedValue,import.meta.env.VITE_SECRET_KEY)
    return decryptedValue
}

export default getLocalStorage