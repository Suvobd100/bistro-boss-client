import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useMenu = () => {
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
      // Return all the states and data
    return { 
        menuData: data, 
        isLoading, 
        isError, 
        error 
    };
}
// if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error: {error.message}</div>;
// Return all the states and data


export default useMenu