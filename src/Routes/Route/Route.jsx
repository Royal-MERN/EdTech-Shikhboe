import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Error404 from "../../Pages/404Error/Error404";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import PrivacyPolicy from "../../Pages/PrivacyPolicy/PrivacyPolicy";
import Register from "../../Pages/Register/Register";
import Test from "../../Pages/test/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/test",
        element: <Test></Test>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
    ],
  },
]);
