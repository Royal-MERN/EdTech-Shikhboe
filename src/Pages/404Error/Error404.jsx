import React from "react";
import SquareBtn from "../../Components/Global/Buttons/SquareBtn";
import Footer from "../../Components/Global/Footer/Footer";
import NavBar from "../../Components/Global/NavBar/NavBar";

const Error404 = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className='bg-[#FDFDE9] w-full h-screen pb-10 flex justify-center items-center flex-col emaxW'>
        <div className='flex justify-center items-center flex-col maxW'>
          <h2 className='capitalize font-semibold sm:text-4xl pt-10 text-center text-primary'>
            404 Page is not found
          </h2>
          <img
            className='w-1/2 pb-5'
            src='../../../public/images/Glasses.gif'
            alt=''
          />
          <SquareBtn to='courses'>Courses</SquareBtn>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Error404;
