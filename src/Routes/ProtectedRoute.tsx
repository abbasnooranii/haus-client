import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const Auth = useAuth();

  const location = useLocation();
  if (Auth?.loading)
    return (
      <div className="w-full min-h-screen flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  if (!Auth?.user) return <Navigate state={location.pathname} to="/signin" />;
  return children;
};

export default ProtectedRoute;