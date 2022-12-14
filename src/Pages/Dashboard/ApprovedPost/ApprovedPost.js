import { useQuery } from "@tanstack/react-query";
import { Avatar, Table } from "flowbite-react";
import React from "react";
import toast from "react-hot-toast";

const ApprovedPost = () => {
  const { data: posts = [], refetch } = useQuery({
    queryKey: ["approvedpost"],
    queryFn: async () => {
      const res = await fetch("https://assignment-12-server-rho.vercel.app/dashboard/approvedpost");
      const data = await res.json();
      return data;
    },
  });

    const handleApproved = (id)=>{
        fetch(`https://assignment-12-server-rho.vercel.app/dashboard/approvedrequest/${id}`,{
            method: "PUT",
            // headers:{

            // }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                toast.success('Post request approved')
            }
            refetch();
        })
    }


  return (
    <div>
      <Table>
        <Table.Head>
          <Table.HeadCell>No. </Table.HeadCell>
          <Table.HeadCell>Products Image </Table.HeadCell>
          <Table.HeadCell>Products Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {posts.map((post, i) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {i + 1}
              </Table.Cell>
              
              <Table.Cell>
                <Avatar img={post.image} rounded={true} />
              </Table.Cell>
              <Table.Cell >{post.name}</Table.Cell>
              <Table.Cell>{post.email}</Table.Cell>
              <Table.Cell>
              {
            post?.isApproved ? <p className="text-bold text-green-600">Approved</p>: <button onClick={()=>handleApproved(post._id)} className="btn btn-outline btn-sm">Pending</button> 
          }

               
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ApprovedPost;
