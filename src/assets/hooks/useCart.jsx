import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  // tan stack query
  const axiousSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: cartData = { data: [] }  } = useQuery({

    queryKey: ["cart",user?.email],
    queryFn: async () => {
      const res = await axiousSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return cartData.data;
};

export default useCart;
