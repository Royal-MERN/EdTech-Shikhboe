import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import WAChat from "./Components/Global/WAChat/WAChat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import { router } from "./Routes/Route/Route";
import AuthProvider from "./Context/AuthProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        <WAChat />
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
