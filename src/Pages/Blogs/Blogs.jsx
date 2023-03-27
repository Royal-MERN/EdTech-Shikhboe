import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "../../Components/Blog/BlogCard";

const Blogs = () => {
  // get all blog from use loader
  const blogs = useLoaderData();
  let allBlog = blogs?.data?.blogs;
  let blogCategories = blogs?.data?.blog_categories;
  let recentBlog = blogs?.data?.recent_blog;

  const { isLoading, error, data:categoryBlogs } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://lms.api.asthaall.com/api/category-blogs/1').then(
        (res) => res.json(),
      ),
  })
  console.log(categoryBlogs?.blogs);



  return (
    <>
      <section className='maxW py-10'>
        <h3 className='text-2xl font-semibold pb-3'>Our Resent Blog</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {recentBlog.map((blog) => (
            <BlogCard key={blog?.uuid} blog={blog}></BlogCard>
          ))}
        </div>

        <div className='flex justify-between pb-5 pt-28 items-center flex-col sm:flex-row'>
          <div className='flex w-full sm:w-1/2 items-center justify-between sm:justify-start sm:pb-0 pb-3'>
            <h3 className='text-2xl font-semibold pr-5'>Blogs</h3>
            <select className='select w-full select-sm max-w-[150px] rounded'>
              <option>All</option>
              {blogCategories.map((blogCategory) => (
                <option key={blogCategory.uuid}>{blogCategory?.name}</option>
              ))}
            </select>
          </div>
          <div className='form-control'>
            <div className='input-group input-group-sm'>
              <input
                type='text'
                placeholder='Search…'
                className='input input-bordered input-sm outline-none focus:outline-none focus:border-primary'
              />
              <button className='btn btn-square btn-primary btn-sm'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {allBlog.map((blog) => (
            <BlogCard key={blog?.uuid} blog={blog}></BlogCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;