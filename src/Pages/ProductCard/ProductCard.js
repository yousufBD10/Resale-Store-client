import { Button, Card } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import ProductModal from "./ProductModal";
// import axios from "axios";
import tick from '../../assets/info_image/tick.png'
import toast from "react-hot-toast";

const ProductCard = () => {
  const [verified,setVerified] = useState(null);
  console.log(verified);

  const {user} = useContext(AuthContext)
  const [product,setProduct] = useState(null);
  
  const products = useLoaderData();
  console.log(products);

  // useEffect(() => {
  //   axios.get('http://localhost:5000/allusers').then((response) => {
  //     setVerified(response.data);
  //   });
  // }, []);


  const handleReport = (data)=>{
  
    fetch(`http://localhost:5000/dashboard/reported/${data}`, {
      method: 'PUT',
      // headers: {
      //     'content-type': 'application/json', 
      //     authorization: `bearer ${localStorage.getItem('accessToken')}`
      // },
     
  })
  .then(res => res.json())
  .then(result =>{
      console.log(result);
      toast.success(` Reported successful`);
    
  })
  }


  return (
    <div className=" grid gap-5 lg:grid-cols-3 md:grid-cols-2 mt-16">
      
      
      
      {products.map((product) => (
        <Card imgSrc={product.image}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
          <small className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            Brand : {product.brand}
          </small>
          <small className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          Condition
 : {product.condition
}
          </small>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Original Price: ${product.original_price}
          </h5>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Resale Price: ${product.resale_price}
          </h5>
          <p className="font-bold tracking-tight text-gray-900 dark:text-white">
            Used : {product.used}
          </p>
         
            <p className="font-bold">Location : {product.location}</p>
            <p className="font-bold">Post Date : {product.post_date.slice(0,10)}</p>
          
       <div className="flex justify-between">
        <div>
        {
          product?.isVarified
           ? <div className="flex">
            <p>Seller Name : </p>
            <div className="flex">
              <img className="w-6" src={tick} alt="" />
              <div><p>{product?.seller_name}</p></div>
            </div>
        </div> : <p className="font-bold text-gray-700  dark:text-gray-400">
          Seller Name : {product.seller_name}
        </p>
         }
        </div>
        <button onClick={()=>handleReport(product._id)} className=" btn btn-outline rounded-lg btn-sm  hover:none items-center ">Reported </button>
       </div>
          <div>
            {/* <Button onClick={()=> setOpenModal(true)}  className="w-full">Book Now</Button> */}
            <label  onClick={()=>setProduct(product)} htmlFor="my-modal-3" className="btn btn-primary w-full">Book Now</label>
    
          </div>
        </Card>
      ))}

    <div>
    { product && <ProductModal
            user={user}
             product={product}
             setProduct={ setProduct}

             ></ProductModal>}
    </div>
    </div>
  );
};

export default ProductCard;
