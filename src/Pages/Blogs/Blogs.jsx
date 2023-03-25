import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "../../Components/Blog/BlogCard";

const Blogs = () => {
  const data = useLoaderData();
  

  let allBlog = data.data.blogs;
  let blogCategories = data.data.blog_categories;
  let recentBlog = data.data.recent_blog;
  
  return (
    <>
      <section className='maxW py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            allBlog.map((blog ) => <BlogCard key={blog?.uuid} blog={blog} ></BlogCard>)
        }
        
      </section>
    </>
  );
};

export default Blogs;
