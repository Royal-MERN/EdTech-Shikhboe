import React from "react";

const Course = ({data}) => {

  const {img,title, price} =data
  return (
    <div>
      <div className="card mb-4 card-compact w-[286px] md:w-[220px] bg-base-100 ">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-green-500 text-lg">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
