import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";
import NavBar from "../../pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div className="font-Cinzel bg-stone-200">
      <header>
        <NavBar />
      
      </header>

      <main className="min-h-[calc(100vh-230px)]">
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
