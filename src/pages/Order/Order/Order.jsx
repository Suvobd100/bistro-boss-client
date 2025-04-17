import Cover from "../../Shared/Cover/Cover";

import orderCoverImg from "../../../assets/shop/order.jpg";

import { Tab } from "react-tabs";
import { Tabs } from "react-tabs";
import { TabList } from "react-tabs";
import { TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import useMenu from "../../../assets/hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
// import FoodCard from "../../../assets/components/SectionTitle/FoodCard/FoodCard";
// import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  const categories=['salad','pizza','soup','dessert','drinks']
  const { category } = useParams();
  const initialIndex=categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const { menuData } = useMenu();

  const desserts =
    menuData?.filter((item) => item.category === "dessert") || [];
  const soup = menuData?.filter((item) => item.category === "soup") || [];
  const salad = menuData?.filter((item) => item.category === "salad") || [];
  const pizza = menuData?.filter((item) => item.category === "pizza") || [];
  const drinks = menuData?.filter((item) => item.category === "drinks") || [];

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | 📃 Order</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <Cover bgImg={orderCoverImg} title={"order food"} />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
