import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';


const MyProducts = () => {
  const {user,loading} = useContext(AuthContext);

    const {data :products =[],isLoading ,refetch} = useQuery({
   
      
        queryKey:['myorders',user?.email],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/dashboard/myproducts?email=${user?.email}`);
            const data = await res.json();
            return data;
          }
          
        })
        console.log(products,user?.email);

        const handleAdversise =(id)=>{
          console.log(id);
          fetch(`http://localhost:5000/dashboard/advertise/${id}`,{
            method: 'PUT',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data);
            refetch()
         
        })
        }

        const handleDeleteProduct =(id)=>{
          console.log(id);
          fetch(`http://localhost:5000/dashboard/productsdelete/${id}`,{
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data);
            toast.success('Your products delete successful')
            refetch()
         
        })
        }

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
        <th>Approved status</th>
        <th>Actions</th>
        <th>Sell status</th>
        <th>Price</th>
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
            <th>
              {
                product?.advertiseBtn ? <p className='text-green-500 font-bold'>Advertised</p> :<button onClick={()=>handleAdversise(product._id)} className='btn btn-primary  btn-sm' > Advertise</button>
              }
            </th>
          <td><p className='font-bold'>Available</p></td>
          <td><p className='font-bold'>$ {product.resale_price}</p></td>
            <th><button onClick={()=>handleDeleteProduct(product._id)} className='btn btn-error  btn-sm' > Delete</button></th>
        </tr>
        
        )
      }
      
      
     
    </tbody>
  </table>
</div>
       
    );
};

export default MyProducts;