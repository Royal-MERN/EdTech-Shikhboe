import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import SquareBtn from "../../Components/Global/Buttons/SquareBtn";

const Test = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('http://lms.asthaall.com/api/courses').then(
            (res) => res.json(),
          ),
      })
      console.log(data);
  return (
    <div className='h-screen'>
      <h1>this is home</h1>
      <Link className='squareBtn'>hi</Link>
      <SquareBtn to={"link"}>hi</SquareBtn>
    </div>
  );
};

export default Test;
