import { Spinner } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { AuthContext } from '../../contexts/AuthProvider';

const MyOrders = () => {

    const [orders ,setOrders] = useState([]);

    const {user,loading} = useContext(AuthContext);
    console.log(user?.email);

    useEffect(()=>{
        axios.get(`http://localhost:5000/dashboard/bookings?email=${user?.email}`)
        .then(res => {
          console.log(res.data);
        setOrders(res.data);
        })
    },[user?.email])
    


    const handleMyOrdersDelete= (data)=>{
      console.log(data);
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
                  order?.isApproved ? <p className='text-green-600 font-bold '>Paid</p> :<button className='text-red-600 font-bold btn btn-outline btn-sm'>Unpaid</button>
                  
                }</td>
                <td>{
                  order?.isApproved ? <p className='text-green-600 font-bold '>Sold</p> :<p className='text-red-600 font-bold '>Unsold</p>
                  
                }</td>
                 
               
                  <th><button onClick={()=>handleMyOrdersDelete()} className='btn btn-error  btn-sm' > Delete</button></th>
              </tr>
              
              )
            }
            
            
           
          </tbody>
        </table>
      </div>
    );
};

export default MyOrders;