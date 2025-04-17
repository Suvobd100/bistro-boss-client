// import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../../pages/Home/Home/Home"
import Menu from "../../pages/Menu/Menu/Menu"
import Order from "../../pages/order/order/order"
import Login from "../../pages/Login/Login/Login"
import SignUp from "../../pages/SignUp/SignUp"





const AppRoute = () => {
  return (
    // <BrowserRouter>
        <Routes>
            {/* Main Layout */}
            <Route path="/" element={<Main/>}>
                <Route index element={<Home/>}/>
                <Route path="menu" element={<Menu/>}/>
                <Route path="order/:category" element={<Order/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<SignUp/>}/>

            </Route>
        </Routes>
     
    // </BrowserRouter>
  )
}

export default AppRoute