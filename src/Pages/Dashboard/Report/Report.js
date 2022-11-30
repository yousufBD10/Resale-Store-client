import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Report = () => {
 
//  const reported = useLoaderData();

 const {data :reported =[],isLoading ,refetch} = useQuery({
   
      
  queryKey:['reported'],
  queryFn:async()=>{
      const res = await fetch('https://assignment-12-server-rho.vercel.app/dashboard/reported');
      const data = await res.json();
      return data;
    }
    
  })




 const handleDelete = (id)=>{
  fetch(`https://assignment-12-server-rho.vercel.app/reportdelete/${id}`, {
            method: 'PUT', 
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
           
              
                //  handleDeleteProduct(user_uid)
                toast.success(`Products deleted successfully`)
                refetch()
              
            
        })
  
}
 


if( isLoading){
  return <progress className="progress center w-56"></progress>
}
   
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
         
          <thead>
            <tr>
              <th>No.</th>
              <th>Products Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
           
            {
                reported.map((report,i)=> <tr key={report._id}>
                    <th>{1+i}</th>
                    <td>{report.name}</td>
                    <td>$ {report.resale_price}</td>
                    <td><button onClick={()=>handleDelete(report._id)} className='btn btn-error btn-sm' >Delete</button></td>
                  </tr>)
            }
         
          </tbody>
        </table>
      </div>
    );
};

export default Report;