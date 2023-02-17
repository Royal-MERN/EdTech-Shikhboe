import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import WAChat from "./Components/Global/WAChat/WAChat";

import "./index.css";
import { router } from "./Routes/Route/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <WAChat/>
    </AuthProvider>
  </React.StrictMode>
);
