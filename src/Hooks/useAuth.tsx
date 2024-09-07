import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const useAuth = () => {
  const Auth = useContext(AuthContext);
  return Auth;
};

export default useAuth;
