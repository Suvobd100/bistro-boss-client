import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"


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

      <Cover bgImg={menuImg } title={'our menu'}/>
    </div>
  );
};

export default Menu;
