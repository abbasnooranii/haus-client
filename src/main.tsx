import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.tsx";
import SearchContextProvider from "./Context/SearchContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "./Context/AuthContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <SearchContextProvider>
        <RouterProvider router={router} />
      </SearchContextProvider>
    </AuthContextProvider>
  </QueryClientProvider>
);
