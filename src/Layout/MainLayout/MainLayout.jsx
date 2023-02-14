import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Global/Footer/Footer";
import NavBar from "../../Components/Global/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div className='w-scree max-w-[1920px] mx-auto'>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
