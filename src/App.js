import './App.css';


import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="  min-h-screen ">
       <RouterProvider router={router}></RouterProvider>
       <Toaster></Toaster>
    </div>

    
  );
}

export default App;
