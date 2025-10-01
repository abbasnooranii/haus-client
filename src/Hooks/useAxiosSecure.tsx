import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // baseURL: "https://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosPublic;
};

export default useAxiosSecure;
