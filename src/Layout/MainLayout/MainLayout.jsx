import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Global/Footer/Footer";
import NavBar from "../../Components/Global/NavBar/NavBar";

const MainLayout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
