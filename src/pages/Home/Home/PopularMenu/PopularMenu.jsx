import SectionTitle from "../../../../assets/components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  // Debug: Log API URL
//   console.log("API URL:", import.meta.env.VITE_API_URL);

  // Fetch all foods data
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/menu`
        );
        return data;
      } catch (err) {
        console.error("API Error:", err);
        throw err; // Let React Query handle the error
      }
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  // Filter data to only include items with category "popular"
  const popularMenu = data?.filter(item => item.category === "popular") || [];
//   console.log(popularItems);
  return (
    <section className="mb-12">
      <SectionTitle heading="From Our Menu" subHeading="Popular Items" />
      <div className="grid md:grid-cols-2 gap-4">
        {
            popularMenu.map(i=><MenuItem 
            key={i._id}
            item={i}
            />)
        }
      </div>
    </section>
  );
};

export default PopularMenu;
