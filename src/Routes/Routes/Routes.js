import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import BlogDetails from "../../Blog/BlogDetails";
import Main from "../../Leyout/Main";
import DisplayErrors from "../../Pages/DisplayErrors/DisplayErrors";


import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ProductCard from "../../Pages/ProductCard/ProductCard";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path:'/',
       element: <Main></Main>,
    errorElement:<DisplayErrors/>,
      
       children:[
        {
       path:'/',
       element:<Home></Home>

        },
        {
       path:'/:brand',
       element:<PrivateRoutes><ProductCard></ProductCard></PrivateRoutes>,
       loader: ({params})=> fetch(`http://localhost:5000/${params.brand}`)

        },
        {
        path:'/register',
        element:<Register></Register>
 
         },
         {
         path:'/login',
         element:<Login></Login>
  
          },
          {
            path:'/blog',
            element: <Blog></Blog>,
            loader: ()=> fetch("http://localhost:5000/blog")
        },
        
        {
            path:'/blog/:id',
            element: <BlogDetails></BlogDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/blog/${params.id}`)
           
        },
       ]
    }
])

export default router;