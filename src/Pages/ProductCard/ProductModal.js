import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';

const ProductModal = ({user,product,setProduct}) => {
  const {name,resale_price,_id} = product;
  console.log(product);
  const {displayName,email,uid} = user;

  const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
   
 
  
    const phone = form.phone.value;
    const meeting_location = form.location.value;
   
    const booked = {
      
      meeting_location,
        name:displayName,
        phone,
        email, 
        product_item :name,
        price:resale_price,
        booking_id: _id,
        user_uid: uid
    }
    console.log(booked);
    fetch('http://localhost:5000/booking',{
      method: "POST",
      headers: {
        'content-type' : 'application/json'

      },
      body: JSON.stringify(booked)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.acknowledged){
        toast.success('Booking corfirmed')

 
        setProduct(null)
       

      }
      else{
        toast.error(data.message)
        setProduct(null)
      
      }
    })

   

  }






    return (
        <div>
        
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h1 className='text-3xl font-bold mb-9'>Booking Form</h1>
    <form onSubmit={handleBooking} className="flex flex-col gap-4">
        <div>
            <h2 className='text-2xl mt-7'>Items Name : <strong> {name}</strong></h2>
            <h3 className='text-2xl mt-4'>Price : <strong>$ {resale_price}</strong></h3>
        </div>
  <div>
    <div className="mb-2 block">
      <Label
      
        value="Your Phone Number"
      />
    </div>
    <TextInput
    
      type="number"
    name='phone'
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
      
        value="Your Meeting Location"
      />
    </div>
    <TextInput
    name='location'
      type="text"
    
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
      
        value="Your Name"
      />
    </div>
    <TextInput
    defaultValue={displayName} disabled
      type="text"
    
    
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
     
        value="Your email"
      />
    </div>
    <TextInput
        defaultValue={email} disabled
      type="email"
    
     
    />
  </div>
 
  <Button type="submit">
    Submit
  </Button>
</form>
  </div>
</div>  
        </div>
    );
};

export default ProductModal;