import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../assets/hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { cart } = useCart(); // Destructure properly
  console.log("Cart items:", cart); // Should now show the actual array

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Our Menu</Link>
      </li>
      {/* <li>
        <Link to={"/priv/order/salad"}>Order Food</Link>
      </li> */}
      <li>
        <Link to={"/order/salad"}>Order Food</Link>
      </li>
      <li>
        {/* <Link to={"/priv/cart"}> */}
        <Link to={"/priv/dashboard/cart"}>
          <button className="btn">
            <FaShoppingCart className="mr-1" />
            <div className="badge badge-sm badge-secondary">+{cart?.data?.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <span className="mr-4">{user?.displayName}</span>
          <button onClick={handleLogOut} className="btn btn-ghost -mt-1">
            Logout
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to={"auth/login"}>Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar max-w-screen-xl mx-auto fixed z-10 opacity-60 bg-black text-white shadow-sm h-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-stone-500 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>

        <div className="flex flex-col text-center">
          <Link to={"/"}>
            <div className="btn btn-ghost text-3xl font-black uppercase">
              {" "}
              Bistro Boss
            </div>

            <h4 className="tracking-[6px]">RESTAURANT</h4>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
