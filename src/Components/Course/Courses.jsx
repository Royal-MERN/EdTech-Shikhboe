import React from "react";
import { CourseData } from "../../../src/Data/Data";
import Course from "./Course";

const Courses = () => {
  return (
    <div className="mt-16 mb-16">
      <h2 className="text-4xl font-bold text-center mb-12 mt-12">চলে এসেছে নতুন ক্র্যাশ কোর্স</h2>
      <div className="grid grid-cols-4 mt-4 mb-4 gap-1 ml-8 mr-8 justify-items-center  ">
        {CourseData.map((data) => (
          <Course data={data}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
