import React from "react";
import SquareBtn from "../../Components/Global/Buttons/SquareBtn";

const VerifyEmail = () => {
  return (
    <>
      <section className='maxW flex flex-col justify-center items-center py-32'>
        <p>
          Please Check your email, also check spam inbox And verify your Email
        </p>
        <br />
        <p className=''>After verifying your Email reload your browser</p>
        <br />
        <SquareBtn to='courses'>Go course</SquareBtn>
      </section>
    </>
  );
};

export default VerifyEmail;
