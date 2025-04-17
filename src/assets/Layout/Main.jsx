import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";
import NavBar from "../../pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation()
  const noHeaderFooter = location.pathname.includes("login")
  return (
    <div className="bg-stone-200">
      <header>
       {noHeaderFooter || <NavBar />} 
      </header>

      <main className="min-h-[calc(100vh-230px)]">
        <Outlet />
      </main>
      <footer>
        {noHeaderFooter ||<Footer />}
        {/* <h2>footer</h2> */}
      </footer>
    </div>
  );
};

export default Main;
