import React from "react";
import Footer from "../../Components/Global/Footer/Footer";
import NavBar from "../../Components/Global/NavBar/NavBar";

const Error404 = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className='bg-[#FDFDE9] w-screen pb-10'>
        <div className='flex justify-center items-center flex-col'>
          <h2 className='capitalize font-semibold text-4xl pt-10'>
            404 Page is not found
          </h2>
          <img
            className='w-1/2'
            src='../../../public/images/Glasses.gif'
            alt=''
          />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Error404;
