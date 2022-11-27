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
        const res = await fetch(`http://localhost:5000/dashboard/${buyer}`);
        const data = await res.json();
        return data;
      },

    });

    
const handleDelete = (data)=>{
  // console.log(data.user_uid);
  const {user_uid} = data;
  // fetch(`http://localhost:5000/dashbord/buyer/${user_uid}`, {
  //           method: 'DELETE', 
  //           // headers: {
  //           //     authorization: `bearer ${localStorage.getItem('accessToken')}`
  //           // }
  //       })
  //       .then(res => res.json())
  //       .then(data => {
  //           if(data.deletedCount > 0){
  //               refetch();
  //               // handleDeleteProduct(user_uid)
  //               toast.success(`Users deleted successfully`)
  //           }
  //       })
   console.log(user_uid);
}
  // fetch(`http://localhost:5000/dashbord/product/${user_uid}`, {
  //           method: 'DELETE', 
  //           // headers: {
  //           //     authorization: `bearer ${localStorage.getItem('accessToken')}`
  //           // }
  //       })
  //       .then(res => res.json())
  //       .then(data => {
  //           if(data.deletedCount > 0){
  //               refetch();
               
  //           }
  //       })
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
            <Table.Cell><button onClick={()=>console.log(br.user_uid)} className="btn btn-error btn-sm">Delete</button></Table.Cell>
            <Table.Cell>{br.email}</Table.Cell>
          </Table.Row> )
          }

         
        </Table.Body>
      </Table>
    </div>
  );
};

export default AllBuyers;
