// import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../../pages/Home/Home/Home"
import Menu from "../../pages/Menu/Menu/Menu"




const AppRoute = () => {
  return (
    // <BrowserRouter>
        <Routes>
            {/* Main Layout */}
            <Route path="/" element={<Main/>}>
                <Route index element={<Home/>}/>
                <Route path="menu" element={<Menu/>}/>

            </Route>
        </Routes>
    
    // </BrowserRouter>
  )
}

export default AppRoute