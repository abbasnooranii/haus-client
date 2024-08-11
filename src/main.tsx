import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.tsx";
import SearchContextProvider from "./Context/SearchContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchContextProvider>
      <RouterProvider router={router} />
    </SearchContextProvider>
  </StrictMode>
);
