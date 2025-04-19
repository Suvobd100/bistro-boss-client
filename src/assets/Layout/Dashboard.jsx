import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const { cart,isLoading } = useCart();
  const dataCart = cart?.data;
  console.log(dataCart);

  if (isLoading)
    return <span className="loading loading-bars loading-xl"></span>;

  return (
    <div className="flex">
      {/* side bar */}
      <div className="w-64 min-h-screen bg-orange-400 ">
        <ul className="menu p-4 gap-6">
          <li>
            <NavLink to={"/dashboard/userHome"}>
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart />
              My Cart ({dataCart?.length})
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <FaAd />
              Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/booking"}>
              <FaList />
              My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaSearch />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
