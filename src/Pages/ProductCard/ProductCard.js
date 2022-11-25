import { Button, Card } from "flowbite-react";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductModal from "./ProductModal";

const ProductCard = () => {
  const products = useLoaderData();



  return (
    <div className=" grid gap-5 lg:grid-cols-3 md:grid-cols-2">
      {products.map((product) => (
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
          <div className="flex justify-between">
            <p>Location : {product.location}</p>
            <p>Post Date : {product.post_date}</p>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Seller Name : {product.seller_name}
          </p>
          <div>
            <Button  className="w-full">Book Now</Button>
        
     
    
          </div>
        </Card>
      ))}
    
    </div>
  );
};

export default ProductCard;
