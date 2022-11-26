import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';


const MyProducts = () => {
  const {user,loading} = useContext(AuthContext);

//   const [products,setProducts] = useState([])

// useEffect((()=>{
//   fetch( `http://localhost:5000/myorders?email=${user?.email}`)
//   .then(res => res.json())
//   .then(data=> setProducts(data))
// }),[user?.email])
// console.log(products,user);
   
    // const url = `http://localhost:5000/myorders?email=${user?.email}`;
    const {data :products =[],isLoading } = useQuery({
   
      
        queryKey:['myorders',user?.email],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/dashboard/myproducts?email=${user?.email}`);
            const data = await res.json();
            return data;
          }
          
        })
        console.log(products,user?.email);

    if(loading || isLoading){
      return <progress className="progress center w-56"></progress>
    }
    return (
      
           <div className="overflow-x-auto ">
         
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>No.</th>
        <th>Image</th>
        <th>Products Name</th>
        <th>status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        products.map((product,i)=> <tr key={product._id}>
          <th>{i+1}</th>
          <td> <div className="avatar">
  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img  src={product.image} alt='' />
  </div>
</div></td>
          <td><p className='font-bold'>{product.name}</p></td>
          
          <td>{
            product?.isApproved ? <p className='text-green-600 font-bold'>Approved</p> :<p className='text-red-600 font-bold'>Pending</p>
            
            }</td>
            <th><button className='btn btn-error  btn-sm' > Delete</button></th>
        </tr>)
      }
      
      
     
    </tbody>
  </table>
</div>
       
    );
};

export default MyProducts;