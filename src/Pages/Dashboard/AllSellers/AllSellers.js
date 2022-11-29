import { useQuery } from '@tanstack/react-query';
import { Table } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';
import {  useParams } from 'react-router-dom';

const AllSellers = () => {
  // const allsellers = useLoaderData();
  const {seller} = useParams()

    const { data: allsellers = [], refetch } = useQuery({
      queryKey: [seller],
      queryFn: async () => {
        const res = await fetch(`https://assignment-12-server-rho.vercel.app/dashboard/${seller}`);
        const data = await res.json();
        return data;
      },

    });
  
 

  const handleVerified=(id) =>{
    fetch(`https://assignment-12-server-rho.vercel.app/dashboard/users/admin/${id}`,{
        method: 'PUT',
        // headers: {
        //     authorization: `bearer ${localStorage.getItem('accessToken')}`
        // }
    })
    .then(res =>res.json())
    .then(data=>{
        console.log(data);
        handleUserVerified(id)
      toast.success('Users verified successful')
        refetch()
    })


}

const handleUserVerified=(id) =>{
  fetch(`https://assignment-12-server-rho.vercel.app/dashboard/userverified/admin/${id}`,{
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



const handleDelete = (data)=>{
  console.log(data.user_uid);
  const {user_uid} = data;
  fetch(`https://assignment-12-server-rho.vercel.app/dashbord/seller/${data.user_uid}`, {
            method: 'DELETE', 
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                handleDeleteProduct(user_uid)
                toast.success(`Users deleted successfully`)
            }
        })
}
  const handleDeleteProduct = (user_uid)=>{
  console.log(user_uid);
  fetch(`https://assignment-12-server-rho.vercel.app/dashbord/product/${user_uid}`, {
            method: 'DELETE', 
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
               
            }
        })
}


  return (
    <div>
     
      <Table>
        <Table.Head>
          <Table.HeadCell>No. </Table.HeadCell>
          <Table.HeadCell>User Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Users Status</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          
          {
            allsellers.map((sller,i) => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
           {i+1}
            </Table.Cell>
            <Table.Cell>{sller.name}</Table.Cell>
            <Table.Cell>{sller.email}</Table.Cell>
            <Table.Cell>
             {
              sller?.isVarified ? <p className='text-green-600 font-bold'>Verified</p>:<button onClick={()=>handleVerified(sller.user_uid)} className="btn  btn-sm">Not verify</button>

             }
              
              
              </Table.Cell>
            <Table.Cell><button onClick={()=>handleDelete(sller)} className="btn btn-error btn-sm">Delete</button></Table.Cell>
          </Table.Row> 
          )
          }

         
        </Table.Body>
      </Table>
    </div>
    );
};

export default AllSellers;