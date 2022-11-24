import { Card } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductCard = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div className="max-w-sm">
            {
                products.map(product=> <Card imgSrc={product.image}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
              </Card>)
            }
        
      </div>
    );
};

export default ProductCard;