import { createBrowserRouter } from "react-router-dom";
import Main from "../../Leyout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ProductCard from "../../Pages/ProductCard/ProductCard";
import Register from "../../Pages/Register/Register";



const router = createBrowserRouter([
    {
        path:'/',
       element: <Main></Main>,
       children:[
        {
       path:'/',
       element:<Home></Home>

        },
        {
       path:'/:brand',
       element:<ProductCard></ProductCard>,
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
       ]
    }
])

export default router;