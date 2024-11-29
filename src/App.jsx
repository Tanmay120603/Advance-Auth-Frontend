import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import { Login, SignUp, VerifyOtp,Home,ResetPassword, Profile, AboutUs, Contact } from "./pages"
import {Provider} from "react-redux"
import store from "./store/configStore"
import "./App.css"
import { RequireAuth } from "./components"

function App(){
  const router=createBrowserRouter(createRoutesFromElements(<Route path="/" element={<RootLayout></RootLayout>}>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/signup" element={<SignUp></SignUp>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/verify-otp" element={<VerifyOtp></VerifyOtp>}></Route>
    <Route path="/password-reset/:token" element={<ResetPassword></ResetPassword>}></Route>
    <Route path="/contact" element={<Contact></Contact>}></Route>
    <Route path="/about" element={<AboutUs></AboutUs>}></Route>
    <Route path="/profile" element={<RequireAuth><Profile></Profile></RequireAuth>}></Route>
  </Route>))

  return(
    <>
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
    </>
  )
}

export default App