import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../../pages/Home/Home/Home"




const AppRoute = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* Main Layout */}
            <Route path="/" element={<Main/>}>
                <Route index element={<Home/>}/>

            </Route>
        </Routes>
    
    </BrowserRouter>
  )
}

export default AppRoute