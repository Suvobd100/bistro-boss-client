import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="font-Poppins bg-stone-200">
      <header>
        {/* <Navbar /> */}
        <h2>Nav</h2>
      </header>

      <main className="min-h-[calc(100vh-230px)] ">
        <Outlet />
      </main>
      <footer >
        <Footer />
        {/* <h2>footer</h2> */}
      </footer>
    </div>
  );
};

export default Main;
