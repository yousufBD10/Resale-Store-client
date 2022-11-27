import { Card } from 'flowbite-react';
import React from 'react';

const Advertise = ({advertises}) => {
    return (
        <div className=" grid gap-5 lg:grid-cols-3 md:grid-cols-2">
      
      
      
      {advertises.map((product) => (
        <Card imgSrc={product.image}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
          <p className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </p>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Original Price: ${product.original_price}
          </h5>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Resale Price: ${product.resale_price}
          </h5>
          <p className="font-bold tracking-tight text-gray-900 dark:text-white">
            Used : {product.used}
          </p>
         
            <p>Location : {product.location}</p>
            <p>Post Date : {product.post_date.slice(0,10)}</p>
          
         {
          product?.isVarified
           ? <div className="flex">
            <p>Seller Name : </p>
            
        </div> : <p className="font-normal text-gray-700 dark:text-gray-400">
          Seller Name : {product.seller_name}
        </p>
         }
          <div>
            {/* <Button onClick={()=> setOpenModal(true)}  className="w-full">Book Now</Button> */}
        
          </div>
        </Card>
      ))}

   
    </div>
    );
};

export default Advertise;