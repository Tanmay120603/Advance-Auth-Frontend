import {ClipLoader} from "react-spinners"

function Button({text,loading,eventHandler}){
    return(
        <button className="w-full flex justify-center text-blue-700 border border-blue-700 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" disabled={loading} onClick={eventHandler}>{loading ? <ClipLoader loading={true} color="blue" size={28}></ClipLoader> : text}</button>
    )
}

export default Button