import React from "react";
import { Link } from "react-router-dom";

const SquareBtn = ({ children, to }) => {
  return (
    <Link className='py-2 px-6 rounded-[4px] btn-primary text-white' to={`/${to}`}>
      {children}
    </Link>
  );
};

export default SquareBtn;
