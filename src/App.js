import './App.css';


import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';


function App() {
  return (
    <div className=" lg:pl-20 lg:pr-20 bg-zinc-100">
       <RouterProvider router={router}></RouterProvider>
    </div>

    
  );
}

export default App;
