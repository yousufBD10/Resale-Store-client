import { Table } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const AllBuyers = () => {
  const buyer = useLoaderData();
  console.log(buyer);
  return (
    <div>
      <h2 className="text-5xl">all Buyers : {buyer.length}</h2>
      <Table>
        <Table.Head>
          <Table.HeadCell>No. </Table.HeadCell>
          <Table.HeadCell>User Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          
          {
            buyer.map((br,i) => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
           {i+1}
            </Table.Cell>
            <Table.Cell>{br.name}</Table.Cell>
            <Table.Cell>{br.email}</Table.Cell>
            <Table.Cell><button className="btn btn-error">Delete</button></Table.Cell>
          </Table.Row> )
          }

         
        </Table.Body>
      </Table>
    </div>
  );
};

export default AllBuyers;
