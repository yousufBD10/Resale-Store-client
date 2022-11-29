import { useQuery } from '@tanstack/react-query';
import { Card, Spinner } from 'flowbite-react';
import React from 'react';
import { useParams } from 'react-router-dom';

const Advertise = () => {


    //   const {advertised} = useParams()
      
      const {data: advertises =[],refetch,isLoading } = useQuery({
          
          queryKey:['alladvertise'],
          queryFn:async()=>{
              const res = await fetch('https://assignment-12-server-rho.vercel.app/alladvertise');
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
  <div className='mb-16'>
        {advertises.length ? <h1 className='text-3xl font-bold my-8 text-center '>Advertise Section</h1>: <></> }
       <div className='gap-5 grid lg:grid-cols-3 md:grid-cols-2  m-auto'>
       {
          advertises.map(advertise=>  <div key={advertise._id} className="card lg:w-64 w-96 mx-auto bg-base-50 shadow-xl cursor-pointer   image-full">
          <figure><img src={advertise.image} alt="" /></figure>
          <div className="card-body ">
            <div className="card-actions justify-start mt-28">
            <h2 className="card-title">{advertise.name}</h2>
            {
              advertise.payment_status ?  <p>Status : Available</p>:   <p>Status : Sold {}</p> 
            }
            <p>Price :  $<span className='font-bold'>{advertise.resale_price}</span></p>
          
            
            </div>
          </div>
        </div>)
        }
       </div>
      </div>
    );
};

export default Advertise;