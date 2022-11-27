import { Spinner } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { AuthContext } from '../../contexts/AuthProvider';

const MyOrders = () => {

    const [orders ,setOrders] = useState([]);

    const {user,loading} = useContext(AuthContext);
    console.log(user?.email);

    useEffect(()=>{
        axios.get(`http://localhost:5000/dashboard/bookings?email=${user?.email}`)
        .then(res => {
          console.log(res.data);
        setOrders(res.data);
        })
    },[user?.email])
    


    if(loading){
        <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
      }
    return (
        <div>
            <h2>{orders.length}</h2>
            {/* this is my orders page{orders.length} */}
        </div>
    );
};

export default MyOrders;