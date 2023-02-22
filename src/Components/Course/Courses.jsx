import React from "react";
import { CourseData } from "../../../src/Data/Data";
import Course from "./Course";

const Courses = () => {
  return (
    <div className="lg:mt-16 lg:mb-16">
      <h2 className="lg:text-4xl text-2xl font-bold text-center lg:mb-12 mb-5 pb-3 backdrop:lg:mt-12">চলে এসেছে নতুন ক্র্যাশ কোর্স</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 pb-3 lg:mt-4 md:mt-4 mb-3 lg:mb-4 md:mb-4 gap-2  lg:ml-8 md:ml-8 lg:mr-8 md:mr-8 justify-items-center  ">
        {CourseData.map((data) => (
          <Course data={data}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
