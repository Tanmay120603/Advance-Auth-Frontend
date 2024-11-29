import encryptData from "./encryptData"

function setLocalStorage(key,value){
    const encValue=encryptData(value,import.meta.env.VITE_SECRET_KEY)
    localStorage.setItem(key,encValue)
}

export default setLocalStorage