import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Wishlist = () => {
    const wishlist = useLoaderData();
    console.log(wishlist);
    return (
       <div>
        {
            wishlist.map(wish=>  <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={wish.image} alt='' /></figure>
            <div className={wish.products_Name}>
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>)
        }
       </div>
    );
};

export default Wishlist;