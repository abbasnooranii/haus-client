import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Hauses from "../Pages/Hauses/Hauses";
import HauseDetails from "../Pages/HauseDetails/HauseDetails";
import Tenants from "../Pages/Tenants/Tenants";
import Landlords from "../Pages/Landlords/Landlords";
import BtlInvestors from "../Pages/BtlInvestors/BtlInvestors";
import Buyers from "../Pages/Buyers/Buyers";
import Sellers from "../Pages/Sellers/Sellers";
import TenantsGuideToRanting from "../Pages/Articles/TenantsGuideToRanting/TenantsGuideToRanting";

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
        path: "/tenants-guide-to-renting",
        element: <TenantsGuideToRanting />,
      },
      {
        path: "/landlords",
        element: <Landlords />,
      },
      {
        path: "/btl-investors",
        element: <BtlInvestors />,
      },
      {
        path: "/buyers",
        element: <Buyers />,
      },
      {
        path: "/sellers",
        element: <Sellers />,
      },
    ],
  },
]);
export default router;
