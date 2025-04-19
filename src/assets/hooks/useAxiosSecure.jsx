import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL  // Changed = to :
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;