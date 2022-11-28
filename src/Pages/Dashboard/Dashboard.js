import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';


const Dashboard = () => {
    const {user,loading} = useContext(AuthContext);
    

    if(loading){
        return <progress className="progress center w-56"></progress>
      }
    return (
        <div className='min-h-screen bg-sky-800 flex justify-center items-center'>
            <h2 className='text-4xl text-white font-bold '>Welcome to {user?.displayName
}</h2>
        </div>
    );
};

export default Dashboard;