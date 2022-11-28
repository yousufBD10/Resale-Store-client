import { useQuery } from '@tanstack/react-query';
import { Card, Spinner } from 'flowbite-react';
import React from 'react';
import { useParams } from 'react-router-dom';

const Advertise = () => {


    //   const {advertised} = useParams()
      
      const {data: advertises =[],refetch,isLoading } = useQuery({
          
          queryKey:['alladvertise'],
          queryFn:async()=>{
              const res = await fetch('http://localhost:5000/alladvertise');
              const data = await res.json();
              return data;
            }
            
            
        });
        // console.log(advertises);
       


if(isLoading){
  <div className="text-center">
  <Spinner aria-label="Center-aligned spinner example" />
</div>
}
    return (
     
   <div>
 {advertises.length ? <h1 className='text-3xl font-bold my-6 text-center'>Advertise Section</h1>: <></> }
 

      <div className=" grid gap-5 lg:grid-cols-3 md:grid-cols-2">
  
  {advertises.map((advertise) => (
    <Card key={advertise._id} >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {advertise?.name}
      </h5>
      <p className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
        {advertise?.name}
      </p>
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Original Price: ${advertise?.original_price}
      </h5>
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        Resale Price: ${advertise?.resale_price}
      </h5>
      <p className="font-bold tracking-tight text-gray-900 dark:text-white">
        Used : {advertise?.used}
      </p>
     
        <p>Location : {advertise?.location}</p>
        <p>Post Date : {advertise?.post_date?.slice(0,10)}</p>
      
     {
      advertise?.isVarified
       ? <div className="flex">
        <p>Seller Name : </p>
        
    </div> : <p className="font-normal text-gray-700 dark:text-gray-400">
      Seller Name : {advertise?.seller_name}
    </p>
     }
      <div>
        {/* <Button onClick={()=> setOpenModal(true)}  className="w-full">Book Now</Button> */}
    
      </div>
    </Card>
  ))}


</div>
  </div>
     
    );
};

export default Advertise;