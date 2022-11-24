import { createBrowserRouter } from "react-router-dom";
import Main from "../../Leyout/Main";
import Home from "../../Pages/Home/Home";
import ProductCard from "../../Pages/ProductCard/ProductCard";



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
       ]
    }
])

export default router;