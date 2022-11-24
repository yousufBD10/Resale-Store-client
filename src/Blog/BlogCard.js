import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const {card_img,date,_id,qr,details} = blog;
    

   const detail= details.slice(0,200);
    
    return (
        <div className='mb-9  bg-white rounded-lg p  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 border shadow-md'>
           
<div className="flex flex-col items-center md:flex-row md:max-w-xl ">
    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={card_img} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{qr}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {detail}...</p>
    </div>

    
</div>
<div className='justify-end flex'>
<Link to={`/blog/${_id}`}><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read more...</button></Link>
</div>
 
        </div>
    );
};

export default BlogCard;