import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function AuthalertDialog({loading,showDialog,showClose,setShowDialog}) {

    const navigate=useNavigate()

    function handleClose(){
        setShowDialog(false)
    }
    
    function handleRedirect(e){
        setShowDialog(false)
        navigate(e.target.value)
    }

    if(loading)return (<Loader></Loader>)

  return (
    <>
    {showDialog && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Welcome to Our Site!
            </h2>
            <p className="text-gray-600 mb-6">
              Please select an option based on your current status:
            </p>
            <div className="space-y-3">
              <button
                value="/signup"
                className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                onClick={handleRedirect}
              >
                I'm new, Sign Up
              </button>
              <button
                value="/login"
                className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                onClick={handleRedirect}
              >
                I’ve visited before, Log In
              </button>
              <button
                value="/verify-otp"
                className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                onClick={handleRedirect}
              >
                Verify My Email
              </button>
            </div>
            {showClose && <button
              onClick={handleClose}
              className="mt-4 w-full text-gray-600 hover:text-gray-800 py-2 px-4 rounded transition duration-200"
            >
              Close
            </button>
            }
          </div>
        </div>
    }
    </>
  );
};

export default AuthalertDialog
