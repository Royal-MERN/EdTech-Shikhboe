import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Error404 from "../../Pages/404Error/Error404";
import BlogDetails from "../../Pages/Blogs/BlogDetails";
import Blogs from "../../Pages/Blogs/Blogs";
import Course from "../../Pages/Course/Course";
import Home from "../../Pages/Home/Home";
import ForgetPassword from "../../Pages/Login/ForgetPassword";
import Login from "../../Pages/Login/Login";
import PrivacyPolicy from "../../Pages/PrivacyPolicy/PrivacyPolicy";
import Profile from "../../Pages/Profile/Profile";
import Register from "../../Pages/Register/Register";
import VerifyEmail from "../../Pages/Register/VerifyEmail";
import Review from "../../Pages/Review/Review/Review";
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
      {
        path: "/course-details",
        element: <Review></Review>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/password-reset",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/email-verify",
        element: <VerifyEmail></VerifyEmail>,
      },
      {
        path: "/blog",
        loader:()=>axios.get('https://lms.api.asthaall.com/api/all-blogs'),
        element: <Blogs></Blogs>,
      },
      {
        path: "/blog/:id",
        loader:({params})=>axios.get(`https://lms.api.asthaall.com/api/details-blog/${params.id}`),
        element: <BlogDetails></BlogDetails>
      },
      {
        path: "/course",
        loader:()=>axios.get('https://lms.api.asthaall.com/api/courses'),
        element: <Course></Course>
      }
    ],
  },
]);
