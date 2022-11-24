import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import BlogCard from './BlogCard';
const Blog = () => {
 
    const blogs = useLoaderData();
    
    return (
         
<div className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
   <div className="container">
      <div className="flex flex-wrap  lg:mx-4">
         <div className="w-full px-4">
            <div className="  mb-[60px] lg:mb-20 max-w-[510px]">
               
               <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                 Latest Blogs
               </h2>
               <p className="text-base text-body-color">
               How do you make your resume stand out in a highly competitive marketplace? Whether you’re just starting your career or a seasoned professional, this is a common question as you begin to craft your resume, eager to land a coveted position.
               </p>
            </div>
         </div>
      </div>


      <div className='mb-8 lg:ml-9 gap-3 lg:grid grid-cols-2'>
        {
            blogs.map(blog => <BlogCard blog={blog} key={blog._id}></BlogCard>)
        }
      </div>




   </div>
</div>


      
    );
};

export default Blog;