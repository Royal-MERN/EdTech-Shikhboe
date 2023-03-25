import React from "react";
import {  format } from 'date-fns'
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  console.log("🚀 ~ file: BlogCard.jsx:5 ~ BlogCard ~ blog:", blog)
  
  return (
    <div className='rounded-md shadow-md bg-white'>
      <div className='flex items-center justify-between p-3'>
        <p>{format(new Date(blog?.created_at),"PP")}</p>
        <p className="link link-secondary">{blog?.category?.name}</p>
      </div>
      <img
        src={blog?.image}
        alt=''
        className='object-cover object-center w-full h-72 dark:bg-gray-500'
      />
      <div className='p-3'>
        {/* <div className='flex items-center justify-between'>h2</div> */}
        <div className='flex flex-wrap items-center pt-3 pb-1'>
          <h3 className='text-2xl pb-2'>{blog?.title}</h3>
        </div>
        <div className='space-y-3'>
          <p>{blog?.details.slice(0, 100)}....<Link className="link link-primary">See more</Link></p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
