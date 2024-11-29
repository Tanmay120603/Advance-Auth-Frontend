function SocialAuthButtons(){

    function handleGoogleAuth(){
        window.open(import.meta.env.VITE_SERVER_URL+"/auth/google","_self")
    }

    function handleGithubAuth(){
        window.open(import.meta.env.VITE_SERVER_URL+"/auth/github","_self")
    }

    return(
        <div className="flex flex-col gap-4">
            <button className="w-full flex items-center justify-center py-2 px-4 border border-red-500 text-red-500 bg-white rounded-lg shadow-md transition duration-200 hover:bg-red-50" onClick={handleGoogleAuth}>             
            <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2"/>Sign in with Google
            </button>
            <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-800 text-gray-800 bg-white rounded-lg shadow-md transition duration-200 hover:bg-gray-200" onClick={handleGithubAuth}>
            <img src="/github-icon.png" alt="GitHub" className="w-5 h-5 mr-2"/>Sign in with GitHub
            </button>
        </div>
    )
}


export default SocialAuthButtons