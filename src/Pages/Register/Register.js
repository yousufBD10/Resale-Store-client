
import { Button, Label, Radio, Select } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import {  Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';




const Register = () => {
    const navigate = useNavigate();
  const {createUser,updateUser} = useContext(AuthContext);
const [signUpError,setSignUpError] = useState('')
  const { register,formState: { errors }, handleSubmit} = useForm();
  const [createdUserEmail, setCreatedUserEmail] = useState('')

   

  
      
    
 const onSubmit = data =>{
  console.log(data.name,data.email,data.type,data.password);
  createUser(data.email,data.password)

  .then(result =>{
    const user = result.user;
    console.log(user);
    // toast.success('Users Successfully created!');
    const userInfo = {
      displayName: data.name,
    }
    updateUser(userInfo)
    .then(()=>{
      // saveUsers(data.name,data.email,data.type)
      
    })
    .catch(err => console.log(err))
  })
  .catch(error =>{
    console.log(error)
    setSignUpError(error.message)
  });
 
  
}
// const saveUsers =(name,email,role)=>{
//   const user= {name,email,role};
//   fetch('http://localhost:5000/users',{
//     method: "POST",
//     headers:{
//       'content-type' : 'application/json',

//     },
//     body: JSON.stringify(user)

//   })
//   .then(res=>res.json())
//   .then(data =>{
//     console.log(data);
//     navigate('/');
//     setCreatedUserEmail(email);
   
//   })
// }

    return (
        <div className="w-full h-auto overflow-scroll block h-screenp-4 flex items-center justify-center" >
        <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
            <div className="sm:text-3xl text-2xl font-semibold text-center mb-12">
               Sign Up
            </div>
            <form  onSubmit={handleSubmit(onSubmit)}  className="">
                <div>
                     <input  {...register("name", { required: true })}
                      type="text" className="focus:outline-none border-b w-full pb-2 mb-8 placeholder-gray-500"  placeholder="Name "/>
                </div>
                
               
                
                 <div>
                <input  {...register("email", { required: true })}
                 type="email"  className="focus:outline-none border-b w-full pb-2  placeholder-gray-500 mb-8"  placeholder="Email Adress "/>
                </div>
               
                
                <div className="">
                    <input  {...register("password", { required: true })}
                   type="password" name='password' className="focus:outline-none border-b w-full pb-2  placeholder-gray-500 mb-8"  placeholder="Password " />
                </div>

                <div id="select">
  <div className="mb-2 block">
    <Label
      htmlFor="countries"
      value="User Type"
    />
  </div>
  <Select
   {...register("type", { required: true })}
    id="countries"
    required={true}
  >
   
    <option value='seller'>
    Seller
    </option>
    <option value='buyer'>
     Buyer
    </option>
  </Select>
</div>
               
                <div className="flex justify-center my-6">
                    <Button type='submit' className=" w-full" >
                        Create Account
                    </Button>
                </div>
                <div className="flex justify-center ">
                    <p className="text-gray-500">Already have an acount? </p>
                    <Link to="/login" className="text-sky-600 pl-2"> Sign In</Link>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Register;