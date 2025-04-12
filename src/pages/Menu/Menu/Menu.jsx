import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Menu = () => {
    useEffect(() => {
        document.title = "Bistro Boss |🍔 Menu Page"; // 🛠️ Force it manually
      }, []);
  return (
    <div>
      <Helmet>
        <title>Hello World</title>
        <meta name="description" content="Test Helmet description" />
        
      </Helmet>

      <h3>Man Man Menu</h3>
    </div>
  );
};

export default Menu;
