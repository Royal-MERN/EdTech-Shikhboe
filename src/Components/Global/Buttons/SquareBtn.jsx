import React, { useState } from "react";
import { Link } from "react-router-dom";

const SquareBtn = ({ children, to }) => {
  return (
    <Link className='btn' to={`/${to}`}>
      {children}
    </Link>
  );
};

export default SquareBtn;
