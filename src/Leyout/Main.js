import React from 'react';
import { Outlet } from 'react-router-dom';
import Footers from '../Pages/Shared/Footer/Footers';
import Navbars from '../Pages/Shared/Navbar/Navbars';

const Main = () => {
    return (
        <div>
            <Navbars></Navbars>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Main;