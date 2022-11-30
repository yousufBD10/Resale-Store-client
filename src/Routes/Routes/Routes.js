import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Blog/Blog";
import BlogDetails from "../../Blog/BlogDetails";
import Main from "../../Leyout/Main";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import ApprovedPost from "../../Pages/Dashboard/ApprovedPost/ApprovedPost";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import DashboardLeyout from "../../Pages/Dashboard/DashboardLeyout";
import MyProducts from "../../Pages/Dashboard/MyProduct/MyProducts";
import Report from "../../Pages/Dashboard/Report/Report";
import DisplayErrors from "../../Pages/DisplayErrors/DisplayErrors";


import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import Wishlist from "../../Pages/MyOrders/Wishlist";

import Payments from "../../Pages/payments/Payments";
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
       loader: ({params})=> fetch(`https://assignment-12-server-rho.vercel.app/${params.brand}`)

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
            loader: ()=> fetch("https://assignment-12-server-rho.vercel.app/blog")
        },
        
        {
            path:'/blog/:id',
            element: <BlogDetails></BlogDetails>,
            loader: ({params})=> fetch(`https://assignment-12-server-rho.vercel.app/blog/${params.id}`)
           
        },
       ]
    },
    {
        path:'/dashboard',
        element:<DashboardLeyout></DashboardLeyout>,
        children:[
            {
                path: '/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path: '/dashboard/:seller',
                element:<AllSellers></AllSellers>,
                // loader: ({params})=> fetch(`https://assignment-12-server-rho.vercel.app/dashboard/${params.seller}`)
            },
            {
                path: '/dashboard/:buyer',
                element:<AllBuyers></AllBuyers>,
                // loader: ({params})=> fetch(`https://assignment-12-server-rho.vercel.app/dashboard/${params.buyer}`)
            },
            {
                path: '/dashboard/addproducts',
                element:<AddProducts></AddProducts>
                
            },
            {
                path: '/dashboard/approvedpost',
                element:<ApprovedPost></ApprovedPost>
                
            },
            {
                path: '/dashboard/myorders',
                element:<MyOrders></MyOrders>
                
            },
            {
                path: '/dashboard/payment/:id',
         element:<Payments></Payments>,
      loader: ({params})=> fetch(`https://assignment-12-server-rho.vercel.app/myorders/payments/${params.id}`)
                
            },
            {
                path: '/dashboard/myproducts',
                element:<MyProducts></MyProducts>
                
            },
            {
                path: '/dashboard/reporteditems',
                element:<Report></Report>,
                // loader: ()=> fetch(`https://assignment-12-server-rho.vercel.app/dashboard/reported`)
                
            }
        ]

    }
])

export default router;