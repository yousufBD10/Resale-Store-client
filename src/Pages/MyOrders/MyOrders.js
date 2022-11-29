import { Spinner } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyOrders = () => {
const [refetch ,setRefetch] = useState(false);
    const [orders ,setOrders] = useState([]);

    const {user,loading} = useContext(AuthContext);
    // console.log(user?.email);

    useEffect(()=>{
        axios.get(`https://assignment-12-server-rho.vercel.app/dashboard/bookings?email=${user?.email}`)
        .then(res => {
         
        setOrders(res.data);
        })
        .catch(error => {
          console.log("axios error for ", error)
      })
    },[user?.email,refetch])
    


    const handleMyOrdersDelete= (id)=>{
      setRefetch(false);
      fetch(`https://assignment-12-server-rho.vercel.app/dashboard/myorderdelete/${id}`,{
        method: 'DELETE',
        // headers: {
        //     authorization: `bearer ${localStorage.getItem('accessToken')}`
        // }
    })
    .then(res =>res.json())
    .then(data=>{
        console.log(data);
        toast.success('Your order delete successful')
       setRefetch(true);
     
    })
    }

    if(loading){
        <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
      }
    return (
        <div className="overflow-x-auto ">
         
        <table className="table w-full">
          
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Products Name</th>
              <th>Payment status</th>
            
              <th>Sell status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order,i)=> <tr key={order._id}>
                <th>{i+1}</th>
                <td> <div className="avatar">
  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img  src={order.image} alt='' />
  </div>
</div></td>
                <td>  <p className='font-bold'>{order.product_item}</p></td>
                
                <td>{
                  order?.isApproved ? <button className='text-red-600 font-bold btn btn-outline btn-sm'>paid</button> :  <Link to={`/dashboard/payment/${order?.booking_id}`}><button className='py-1 px-3 hover:bg-teal-500 rounded-md btn-info font-bold '>Payment</button></Link> 
                  
                }</td>
                <td>{
                  order?.isApproved ? <p className='text-green-600 font-bold '>Sold</p> :<p className='text-red-600 font-bold '>Unsold</p>
                  
                }</td>
                 
               
                  <th><button onClick={()=>handleMyOrdersDelete(order._id)} className='btn btn-error  btn-sm' > Delete</button></th>
              </tr>
              
              )
            }
            
            
           
          </tbody>
        </table>
      </div>
    );
};

export default MyOrders;