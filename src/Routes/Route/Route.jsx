import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Error404 from "../../Pages/404Error/Error404";
import Home from "../../Pages/Home/Home";
import Test from "../../Pages/test/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/test',
        element:<Test></Test>
      }
    ],
  },
  {
    path: "/*",
    element: <Error404></Error404>,
  },
]);
