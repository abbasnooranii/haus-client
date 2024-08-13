import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Hauses from "../Pages/Hauses/Hauses";
import HauseDetails from "../Pages/HauseDetails/HauseDetails";
import Tenants from "../Pages/Tenants/Tenants";
import Landlords from "../Pages/Landlords/Landlords";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/hauses",
        element: <Hauses />,
      },
      {
        path: "/hauses/:id",
        element: <HauseDetails />,
      },
      {
        path: "/tenants",
        element: <Tenants />,
      },
      {
        path: "/landlords",
        element: <Landlords />,
      },
    ],
  },
]);
export default router;
