import SectionTitle from "../../../../assets/components/SectionTitle/SectionTitle";

import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../../assets/hooks/useMenu";

const PopularMenu = () => {
  // Fetch all foods menu data from custom hook
  const { menuData, isLoading, isError, error } = useMenu();

  if (isLoading) return <div>Loading menu...</div>;
  if (isError) return <div>Error loading menu: {error.message}</div>;

  const popularMenu = menuData?.filter((item) => item.category === "popular") || [];

  return (
    <section className="mb-12">
      <SectionTitle heading="From Our Menu" subHeading="Popular Items" />
      <div className="grid md:grid-cols-2 gap-4">
        {popularMenu.map((i) => (
          <MenuItem key={i._id} item={i} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
