import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';

const ProductModal = () => {
    return (
        <div>
          {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h1 className='text-3xl font-bold mb-9'>Booking Form</h1>
    <form className="flex flex-col gap-4">
        <div>
            <h2 className='text-2xl mt-7'>Items Name : <strong> apple</strong></h2>
            <h3 className='text-2xl mt-4'>Price : <strong>$ 456</strong></h3>
        </div>
  <div>
    <div className="mb-2 block">
      <Label
      
        value="Your Phone Number"
      />
    </div>
    <TextInput
    
      type="number"
    
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
    
      type="text"
    
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
     
        value="Your email"
      />
    </div>
    <TextInput
      
      type="email"
    
      required={true}
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