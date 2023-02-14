import React from "react";
import { Link } from "react-router-dom";
import SquareBtn from "../../Components/Global/Buttons/SquareBtn";

const Home = () => {
  return (
    <div className="h-screen w-full maxW">
      <h1>this is home</h1>
      <Link className="squareBtn">hi</Link>
      <SquareBtn to={"link"}>hi</SquareBtn>
    </div>
  );
};

export default Home;
