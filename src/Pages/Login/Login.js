import { Button, Label, Radio, Select } from "flowbite-react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import g from '../../assets/info_image/g.png'
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { loginEmailPass, updateUserProfile ,sinInGoogle} = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createdUserEmail, setCreatedUserEmail] = useState("");

  const onSubmit = (data) => {
    // console.log(data.name, data.email, data.type, data.password);
    loginEmailPass(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Users Login Successfull!");
        navigate(from, { replace: true });
      
     
  })}

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignin = () => {
    sinInGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const role = 'buyer';
        saveUsers(user.displayName,user.email,role)
        
        const currentUser = {
          email: user.email
      }

      console.log(currentUser);
      

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const saveUsers = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://assignment-12-server-rho.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="w-full h-auto overflow-scroll block h-screenp-4 flex items-center justify-center">
      <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
        <div className="sm:text-3xl text-2xl font-semibold text-center mb-12">
        Login 
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="">
         

          <div>
            <input
              {...register("email", { required: true })}
              type="email"
              className="focus:outline-none border-b w-full pb-2  placeholder-gray-500 mb-8"
              placeholder="Email Adress "
            />
          </div>

          <div className="">
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              className="focus:outline-none border-b w-full pb-2  placeholder-gray-500 mb-8"
              placeholder="Password "
            />
          </div>

        

          <div className="flex justify-center my-6">
            <Button type="submit" className=" w-full">
           Login
            </Button>
          </div>
          <div className="flex justify-center ">
            <p className="text-gray-500">Don't have an acount? </p>
            <Link to="/register" className="text-sky-600 pl-2">
              {" "}
              Sign Up
            </Link>
          </div>
        </form>
       <div className="flex justify-center mt-6">
       <Button onClick={handleGoogleSignin} color="gray"><img className="w-8" src={g} alt></img> Sign In With Google</Button>
       </div>
      </div>
    </div>
  );
};

export default Login;
