import { Button, Carousel } from "flowbite-react";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="lg:flex items-center ">
        <div className="lg:w-1/2 p-3">
          <h1 className="text-5xl font-bold mb-5">
            The Smart, Sustainable and Trusted Way to Buy and Sell Tech
          </h1>
         <div className="flex ">
         <Button className="mr-3 border-white bg-sky-800 hover:bg-sky-700 w-1/2">
      Default
    </Button >
          <Button className="w-1/2 bg-green-600 hover:bg-green-500">
      Default
    </Button>
         </div>
        </div>
        <div className="lg:w-1/2 p-3" >
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
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

      <div >
        <h1 className="text-3xl flex font-bold justify-center mt-8">Shop & Sell By Category</h1>
        <div className="mt-8">
            <div className="flex justify-center gap-8 " >
               
                <div className="p-16 bg-white">
                <img className="w-32" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647622740-samsung-galaxy-a53-1647622731.jpg?crop=1xw:1xh;center,top&resize=480:*" alt="" />
                <h4>samsung</h4>

                </div>
                <div className="p-16 bg-white">
                <img className="w-32" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647622740-samsung-galaxy-a53-1647622731.jpg?crop=1xw:1xh;center,top&resize=480:*" alt="" />
                <h4>samsung</h4>

                </div>
                <div className="p-16 bg-white">
                <img className="w-32" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647622740-samsung-galaxy-a53-1647622731.jpg?crop=1xw:1xh;center,top&resize=480:*" alt="" />
                <h4>samsung</h4>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
