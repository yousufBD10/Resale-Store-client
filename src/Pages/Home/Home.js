import { useQuery } from "@tanstack/react-query";
import { Button, Carousel, Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Advertise from "./Advertise";
import Info from "./Info";

const Home = () => {

//   const [advertises,setAdvertises] = useState([]);
//   useEffect(()=>{
//     fetch('http://localhost:5000/alladvertise')
//     .then(res=>res.json())
//     .then(data=>{
//       console.log(data);
//       setAdvertises(data)
//     })
//   },[])
// console.log(advertises);

        // const {advertised} =useParams()
        // console.log(advertised);
   
// const {data: advertises =[],refetch,isLoading } = useQuery({
  
//     queryKey:['alladvertise'],
//     queryFn:async()=>{
//         const res = await fetch('http://localhost:5000/alladvertise');
//         const data = await res.json();
//         return data;
//     }

    
// });


// if(isLoading){
//   <div className="text-center">
//   <Spinner aria-label="Center-aligned spinner example" />
// </div>
// }
// console.log(advertises);

  return (
    <div className="min-h-screen">
   
      <div className="lg:flex items-center ">
        <div className="lg:w-1/2 p-3">
          <h1 className="text-5xl font-bold mb-5">
            The Smart, <br /> Sustainable and Trusted Way to Buy and Sell Tech
          </h1>
          <p className="font-bold">Here is a list of other trustworthy website brokers worth considering for your website purchase or sale.Before the advent of the internet and ecommerce, yard sales and newspapers were the only places where you could sell your stuff without owning a storefront.</p>
         <div className="flex mt-4">
         <button className="mr-3 text-white py-3 font-bold border-white bg-sky-800 hover:bg-sky-700 w-1/2">
      Start Selling
    </button >
          <button className="w-1/2 font-bold text-white py-3 bg-green-600 hover:bg-green-500">
      Start Shopping
    </button>
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
                src="https://cdn.thewirecutter.com/wp-content/media/2021/08/budget-android-phone-2048px-nord-front.jpg"
                alt="..."
              />
              <img
                src="https://b2c-contenthub.com/wp-content/uploads/2022/09/iPhone-14-Pro_review_1.jpg?quality=50&strip=all"
                alt="..."
              />
              <img
                src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/f21_pro/listpage/listpage-SunsetOrange-1256_628-pc.jpg"
                alt="..."
              />
              <img
                src="https://www.techadvisor.com/wp-content/uploads/2022/06/best_smartphone_apr_2022_hero.jpg?quality=50&strip=all"
                alt="..."
              />
            </Carousel>
          </div>
        </div>
      </div>

      <div className="my-16">
        <h1 className="text-3xl flex font-bold justify-center mt-8">Shop & Sell By Category</h1>
       
        <div className="mt-8">
            <div className="lg:flex justify-center gap-8 text-center font-bold" >
               
               {/* {
                categories.map(category=>  <div className="p-16 cursor-pointer hover:bg-zinc-300 bg-white">
                <img className=''src={category.image} alt="" />
                <h4>{category.brand}</h4>

                </div>)
               } */}
               
               <Link to='/Samsung'> <div className="p-16 mx-auto w-64 mb-4  hover:bg-zinc-300 bg-white flex justify-center ">
               <div>
               <img className="w-32  mb-7" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647622740-samsung-galaxy-a53-1647622731.jpg?crop=1xw:1xh;center,top&resize=480:*" alt="" />
                <h4>Samsung</h4></div>

                </div></Link>

               <Link to='/Apple'> <div className="p-16 w-64 mx-auto mb-4  hover:bg-zinc-300 bg-white flex justify-center">
                <div>
                <img className="w-32 mb-7" src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662655288/Croma%20Assets/Communication/Mobiles/Images/261985_pqnh1v.png/mxw_640,f_auto" alt="" />
                <h4>Apple</h4>
                </div>

                </div></Link>
               <Link to='/Xioami'> <div className="p-16 w-64 mx-auto  hover:bg-zinc-300 flex justify-center bg-white">
               <div>
               <img className="w-32 mb-7" src="https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi-cc9-pro-1.jpg" alt="" />
                <h4>Xioami</h4>

               </div>
                </div></Link>
               
            </div>
        </div>
      </div  >
      <Advertise></Advertise>
      <Info></Info>
    </div>
  );
};

export default Home;
