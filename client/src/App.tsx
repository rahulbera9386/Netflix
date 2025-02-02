import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { ToastContainer } from "react-toastify"



function App() {


  return (
    <>
    
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/login" element={<Login/>}/>
  
</Routes>
<ToastContainer />
    </>
  )
}

export default App
