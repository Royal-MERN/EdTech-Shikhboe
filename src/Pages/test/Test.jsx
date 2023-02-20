import React from 'react';
import { Link } from 'react-router-dom';
import SquareBtn from '../../Components/Global/Buttons/SquareBtn';

const Test = () => {
    return (
        <div className='h-screen'>
             <h1>this is home</h1>
      <Link className="squareBtn">hi</Link>
      <SquareBtn to={"link"}>hi</SquareBtn>
        </div>
    );
};

export default Test;