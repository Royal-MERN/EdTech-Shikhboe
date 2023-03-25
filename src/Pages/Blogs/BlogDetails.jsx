import { format } from "date-fns";
import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const data = useLoaderData();
  const blogDetails = data?.data?.blogs_details[0]; 
  const blogComments = data?.data?.blog_comments;

  return (
    <section className='max-w-4xl m-auto py-5'>
      <h1 className="text-3xl font-semibold">{blogDetails?.title}</h1>
      <p><span>{format(new Date(blogDetails?.created_at),"PP")}</span></p>
      <div className="py-5">
        <img src={blogDetails?.image} alt="" />
      </div>
      <p>{blogDetails?.details}</p>
    </section>
  );
};

export default BlogDetails;
