import { Button, Label, Select, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProducts = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate()
    const {register,formState: { errors }, handleSubmit,} = useForm();
    // const onSubmit = (data) => {
      
    //   const date = new Date();
    //     const verified= false;
    //     console.log(data.name,
    //          data.products,
    //          data.original_price,
    //          data.resale_price,
    //          data.condition,
    //          data.category,
    //          data.used,
    //          data.file,
    //          date,
    //          verified,
    //          data.Location,
    //           data.Phone, data.description);

    const handleAddproduct = (data) => {
      const date = new Date();
          const verified= false;
          const user_uid= user.uid;
          const isApproved= false;
      const imageHostKey = process.env.REACT_APP_IMAGE_API;
      console.log( imageHostKey);
      const image = data.file[0];
      const name = data.name;
      const products = data.products;
      const original_price = data.original_price;
      const resale_price = data.resale_price;
      const condition = data.condition;
      const category = data.category;
      const used = data.used;
      const Location = data.Location;
      const phone = data.phone;
      const email = user.email;
      const description = data.description;
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_API}`
      console.log(url);
      fetch(url, {
          method: 'POST',
          body: formData
      })
      .then(res => res.json())
      .then(imgData => {
        const image = imgData.data.url
          if(imgData.success){
              console.log(imgData.data.url);
              const product = {
              seller_name: name,
         name: products,
          original_price,
          resale_price,
          condition,
          brand:category,
          used,
          email,
          post_date: date,
           verified,
           isApproved,
           user_uid,
         location: Location,
           phone,description,
                  image
              }
              fetch('http://localhost:5000/products', {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json', 
                      authorization: `bearer ${localStorage.getItem('accessToken')}`
                  },
                  body: JSON.stringify(product)
              })
              .then(res => res.json())
              .then(result =>{
                  console.log(result);
                  toast.success(`Your products is added successfully`);
                  navigate('/dashboard/myproducts')
              })
          }
      })
  }

  // if(isLoading){
  //     return <Loading></Loading>
  // }
      
      // };

     


    return (
        <div className="w-full mt-8 h-auto overflow-scroll block h-screenp-4 flex items-center justify-center">
        <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
          <div className="sm:text-3xl text-2xl font-semibold text-center mb-12">
           Add A Products
          </div>
          <form onSubmit={handleSubmit(handleAddproduct)} className="">
            <div>
            <div className="mb-2 block">
      <Label
       
        value="Your Name"
      />
    </div>
              <TextInput
                {...register("name", { required: true })}
                type="text"
             
                placeholder=" Your Name "
              />
            </div>
            <div>
            <div className="mb-2 block">
      <Label
       
        value="Your Products"
      />
    </div>
              <TextInput
                {...register("products", { required: true })}
                type="text"
               
                placeholder=" Products Name "
              />
            </div>

            <div>
            <div className="mb-2 block">
      <Label
       
        value="Your Products Image"
      />
    </div>
            <input   {...register("file", { required: true })} type="file" className="file-input w-full max-w-xs mb-2" />
            </div>
            <div>
            <div className="mb-2 block">
      <Label
       
        value="Original Price"
      />
    </div>
              <TextInput
                {...register("original_price", { required: true })}
                type="number"
               
                placeholder="Original Price "
              />
            </div>
            <div>
            <div className="mb-2 block">
      <Label
       
        value="Resale Price "
      />
    </div>
              <TextInput
                {...register("resale_price", { required: true })}
                type="number"
               
                placeholder="Resale Price "
              />
            </div>
          
 
            <div>
    <div className="mb-2 block">
      <Label
      
        value="Location"
      />
    </div>
    <TextInput
       {...register("Location", { required: true })}
      type="text"
      placeholder="Location"
      required={true}
    />
  </div>
            <div>
    <div className="mb-2 block">
      <Label
      
        value="Phone Number"
      />
    </div>
    <TextInput
       {...register("Phone", { required: true })}
      type="text"
      placeholder="Phone Number"
      required={true}
    />
  </div>
  
  <div id="select">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Products Condition" />
              </div>
              <Select
                {...register("condition", { required: true })}
                id="countries"
                required={true}
              >
                <option value="exellent">Exellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </Select>
            </div>

            <div id="select">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Products Catrgory" />
              </div>
              <Select
                {...register("category", { required: true })}
                id="countries"
                required={true}
              >
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Xioami">Xioami</option>
              </Select>
            </div>

            <div id="select">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Used " />
              </div>
              <Select
                {...register("used", { required: true })}
                id="countries"
                required={true}
              >
                <option value="1 month">1 month</option>
                <option value="2 months">2 months</option>
                <option value="3 months">3 months</option>
                <option value="4 months">4 months</option>
                <option value="5 months">5 months</option>
                <option value="6 months">6 months</option>
                <option value="7 months">7 months</option>
                <option value="8 months">8 months</option>
                <option value="9 months">9 months</option>
                <option value="10 months">10 months</option>
                <option value="11 months">11 months</option>
                <option value="12 months">12 months</option>
                <option value="13 months">13 months</option>
                <option value="14 months">14 months</option>
                <option value="15 months">15 months</option>
                <option value="16 months">16 months</option>
                <option value="17 months">17 months</option>
                <option value="18 months">18 months</option>
               
              </Select>
            </div>
            <div className="form-control">
  <label className="label">
    <span className="label-text">Description </span>
   
  </label> 
  <textarea    {...register("description", { required: true })}
   className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
  <label className="label">
   
  </label> 
</div>
  
            <div className="flex justify-center my-6">
              <Button type="submit" className=" w-full">
                Create Account
              </Button>
            </div>
           
          </form>
       
        </div>
      </div>
    );
};

export default AddProducts;