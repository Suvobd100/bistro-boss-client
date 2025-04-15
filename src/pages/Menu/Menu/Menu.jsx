import { useEffect } from "react";
// import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../assets/hooks/useMenu";
import SectionTitle from "../../../assets/components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  // for helmet use
  useEffect(() => {
    document.title = "Bistro Boss |🍔 Menu Page"; // 🛠️ Force it manually
  }, []);

  // Menu  all data load by custom hook useMenu

  const { menuData } = useMenu();

  const desserts =
    menuData?.filter((item) => item.category === "dessert") || [];
  const soup = menuData?.filter((item) => item.category === "soup") || [];
  const salad = menuData?.filter((item) => item.category === "salad") || [];
  const pizza = menuData?.filter((item) => item.category === "pizza") || [];
  const offered = menuData?.filter((item) => item.category === "offered") || [];
  // const dessert = menuData?.filter((item) => item.category === "dessert") || [];

  return (
    <div>
      {/* helmet not work version problem update react */}
      {/* <Helmet>
        <title>Hello World</title>
        <meta name="description" content="Test Helmet description" />
      </Helmet> */}

      <Cover bgImg={menuImg} title={"our menu"} />
      {/* main cover */}
      <SectionTitle subHeading={"don't miss"} heading={"today's offer"} />
      {/* offered menu item */}
      <div className="p-4 mt-4 mb-4">
        <MenuCategory items={offered} />
      </div>
      {/* desert menu */}
      <div >
        <MenuCategory
          items={desserts}
          title={"Deserts"}
          coverImg={dessertImg}
        />
      </div>
      {/* pizza menu */}
      <div >
        <MenuCategory
          items={pizza}
          title={"pizza"}
          coverImg={pizzaImg}
        />
      </div>
      {/* salad menu */}
      <div >
        <MenuCategory
          items={salad}
          title={"salad"}
          coverImg={saladImg}
        />
      </div>
      <div >
        <MenuCategory
          items={soup}
          title={"soup"}
          coverImg={soupImg}
        />
      </div>
    </div>
  );
};

export default Menu;
