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
import ContactUs from "../Pages/ContactUs/ContactUs";
import HausSalesandLettingLeeds from "../Pages/ContactUs/HausSalesandLettingsLeeds/HausSalesandLettingsLeeds";
import ReferFriend from "../Pages/ReferFriend/ReferFriend";
import AboutUs from "../Pages/AboutUs/AboutUs";
import VirtualTours from "../Pages/Articles/VirtualTours/VirtualTours";
import HausStudentLeeds from "../Pages/ContactUs/HausStudentLeeds/HausStudentLeeds";
import HausSalesandLettingsSouthYorkshire from "../Pages/ContactUs/HausSalesandLettingsSouthYorkshire/HausSalesandLettingsSouthYorkshire";
import Signin from "../Pages/SignIn/Signin";
import Signup from "../Pages/Signup/Signup";
import SavedProperties from "../Pages/SavedProperties/SavedProperties";
import ProtectedRoute from "./ProtectedRoute";
import SavedSearches from "../Pages/SavedSearches/SavedSearches";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/saved-properties",
        element: (
          <ProtectedRoute>
            <SavedProperties />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-searches",
        element: (
          <ProtectedRoute>
            <SavedSearches />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
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
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/contact-haus-sales-and-lettings-leeds",
        element: <HausSalesandLettingLeeds />,
      },
      {
        path: "/contact-haus-student-leeds",
        element: <HausStudentLeeds />,
      },
      {
        path: "/contact-haus-sales-and-lettings-south-yorkshire",
        element: <HausSalesandLettingsSouthYorkshire />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/refer-a-friend",
        element: <ReferFriend />,
      },
      {
        path: "/virtual-tours",
        element: <VirtualTours />,
      },
    ],
  },
]);
export default router;
