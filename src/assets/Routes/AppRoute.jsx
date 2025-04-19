// import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Menu from "../../pages/Menu/Menu/Menu";
import Order from "../../pages/order/order/order";
import Login from "../../pages/Login/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateLayout from "../Layout/PrivateLayout";
import AuthLayout from "../Layout/AuthLayout";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../../pages/NotFound/NotFound";
import Dashboard from "../Layout/DashBoard";
import Cart from "../../pages/Dashboard/Cart/Cart";

const AppRoute = () => {
  return (
    // <BrowserRouter>
    <Routes>
      {/* Main Layout */}
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order/:category" element={<Order />} />
        {/* <Route path="login" element={<Login/>}/> */}
        {/* <Route path="signup" element={<SignUp/>}/> */}
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* dash board */}
      <Route path="/dashboard" element={<Dashboard />}>
      {/* old path public */}
        {/* <Route path="cart" element={<Cart/>} /> */}
       
      </Route>

      {/* Private route */}
      <Route path="/priv" element={<PrivateLayout />}>
        {/* <Route path="order/:category" element={<PrivateRoute><Order/></PrivateRoute>}/> */}
        {/* <Route path="cart" element={<Cart/>} /> */}
        <Route path="dashboard" element={<Dashboard />}>
      {/* old path public */}
        {/* <Route path="cart" element={<Cart/>} /> */}
        <Route path="cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
       
      </Route>
        {/* <Route path="cart" element={<PrivateRoute><Cart/></PrivateRoute>} /> */}
      </Route>

      {/* AuthLayout Routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>

    // </BrowserRouter>
  );
};

export default AppRoute;
