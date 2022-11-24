import { useQuery } from "@tanstack/react-query";
import { Button, Carousel } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import Info from "./Info";

const Home = () => {
    const url = 'http://localhost:5000/categories';
const {data: categories =[],refetch } = useQuery({
  
    queryKey:['categories'],
    queryFn:async()=>{
        const res = await fetch(url,{
          
        });
        const data = await res.json();
        return data;
    }

    
});

  return (
    <div className="min-h-screen">
      <div className="lg:flex items-center ">
        <div className="lg:w-1/2 p-3">
          <h1 className="text-5xl font-bold mb-5">
            The Smart, Sustainable and Trusted Way to Buy and Sell Tech
          </h1>
          <p className="font-bold">Here is a list of other trustworthy website brokers worth considering for your website purchase or sale.Before the advent of the internet and ecommerce, yard sales and newspapers were the only places where you could sell your stuff without owning a storefront.</p>
         <div className="flex mt-4">
         <Button className="mr-3 border-white bg-sky-800 hover:bg-sky-700 w-1/2">
      Default
    </Button >
          <Button className="w-1/2 bg-green-600 hover:bg-green-500">
      Default
    </Button>
         </div>
        </div>
        <div className="lg:w-1/2 p-3" >
          <div className="h-64 sm:h-64 xl:h-96 2xl:h-96">
            <Carousel leftControl=" " rightControl=" ">
              <img
                src="https://new-media.dhakatribune.com/en/uploads/2022/06/01/smartphones-1.jpeg"
                alt="..."
              />
              <img
                src="https://www.telegraph.co.uk/content/dam/recommended/2022/05/31/best-Best-laptops-main-image-Best-laptops-for-everyday-use-2022_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.png?imwidth=680"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
              />
            </Carousel>
          </div>
        </div>
      </div>

      <div className="my-16">
        <h1 className="text-3xl flex font-bold justify-center mt-8">Shop & Sell By Category</h1>
       
        <div className="mt-8">
            <div className="flex justify-center gap-8 " >
               
               {/* {
                categories.map(category=>  <div className="p-16 cursor-pointer hover:bg-zinc-300 bg-white">
                <img className=''src={category.image} alt="" />
                <h4>{category.brand}</h4>

                </div>)
               } */}
               
               <Link to='category/Samsung'> <div className="p-16 bg-white">
                <img className="w-32" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647622740-samsung-galaxy-a53-1647622731.jpg?crop=1xw:1xh;center,top&resize=480:*" alt="" />
                <h4>Samsung</h4>

                </div></Link>
               <Link to='category/Apple'> <div className="p-16 bg-white">
                <img className="w-32" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647622740-samsung-galaxy-a53-1647622731.jpg?crop=1xw:1xh;center,top&resize=480:*" alt="" />
                <h4>Apple</h4>

                </div></Link>
               <Link to='/category/Xioami'> <div className="p-16 bg-white">
                <img className="w-32" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647622740-samsung-galaxy-a53-1647622731.jpg?crop=1xw:1xh;center,top&resize=480:*" alt="" />
                <h4>Xioami</h4>

                </div></Link>
               
            </div>
        </div>
      </div  >
      <Info></Info>
    </div>
  );
};

export default Home;
