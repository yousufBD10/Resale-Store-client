import { useQuery } from "@tanstack/react-query";
import { Spinner, Table } from "flowbite-react";
import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";

const AllBuyers = () => {
  // const buyer = useLoaderData();
  const {buyer} = useParams()
 
    const { data: buyers = [], refetch,isLoading } = useQuery({
      queryKey: [buyer],
      queryFn: async () => {
        const res = await fetch(`https://assignment-12-server-rho.vercel.app/dashboard/${buyer}`);
        const data = await res.json();
        return data;
      },

    });

    
const handleDelete = (id)=>{
  // console.log(id.user_uid);
  const {user_uid} = id;
  fetch(`https://assignment-12-server-rho.vercel.app/dashbord/buyer/${id}`, {
            method: 'DELETE', 
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                //  handleDeleteProduct(user_uid)
                toast.success(`Users deleted successfully`)
            }
        })
   console.log(user_uid);
}
// const handleDeleteProduct = (user_uid)=>{
//   console.log(user_uid);
//   fetch(`https://assignment-12-server-rho.vercel.app/dashbord/product/${user_uid}`, {
//             method: 'DELETE', 
//             // headers: {
//             //     authorization: `bearer ${localStorage.getItem('accessToken')}`
//             // }
//         })
//         .then(res => res.json())
//         .then(data => {
//             if(data.deletedCount > 0){
//                 refetch();
               
//             }
//         })
// }


    if(isLoading){
      <div className="text-center">
      <Spinner aria-label="Center-aligned spinner example" />
    </div>
    }
  
  console.log(buyers);
  return (
    <div>
      <Table>
     
        <Table.Head>
          <Table.HeadCell>No. </Table.HeadCell>
          <Table.HeadCell>User Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          
          {
            buyers.map((br,i) => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
           {i+1}
            </Table.Cell>
            <Table.Cell>{br.name}</Table.Cell>
            <Table.Cell><button onClick={()=>handleDelete(br._id)} className="btn btn-error btn-sm">Delete</button></Table.Cell>
            <Table.Cell>{br.email}</Table.Cell>
          </Table.Row> )
          }

         
        </Table.Body>
      </Table>
    </div>
  );
};

export default AllBuyers;
