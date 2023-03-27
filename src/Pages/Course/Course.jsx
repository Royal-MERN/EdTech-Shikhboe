import React from "react";
import { useLoaderData } from "react-router-dom";

const Course = () => {
  const coursesData = useLoaderData();

  //   const topCourses = coursesData?.data?.top-courses;
  const courses = coursesData?.data?.course;
  console.log("🚀 ~ file: Course.jsx:5 ~ Course ~ courses:", courses);
  return (
    <>
      <section className="maxW py-10">
        <div className='max-w-xs rounded-md shadow-md bg-white'>
          <img
            src='https://source.unsplash.com/random/300x300/?2'
            alt=''
            className='object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500'
          />
          <div className='flex flex-col justify-between p-6 space-y-8'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-semibold tracking-wide'>
                Donec lectus leo
              </h2>
              <p className='dark:text-gray-100'>
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
              </p>
            </div>
            <button
              type='button'
              className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900'>
              Read more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
