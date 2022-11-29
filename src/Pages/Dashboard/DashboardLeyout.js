import { Sidebar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useBuyers from "../../Hooks/useBuyers";
import useSellers from "../../Hooks/useSellers";
import Navbars from "../Shared/Navbar/Navbars";

const DashboardLeyout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSellers] = useSellers(user?.email)
    const [isBuyers] = useBuyers(user?.email)
  return (
    <div>
      <Navbars></Navbars>
      <label  htmlFor="dashboardDawer" tabIndex={2} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
           
            

      <div className="drawer drawer-mobile mt-8">
        <input id="dashboardDawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 ">
           




           {
            isAdmin && <>
                <li>
              <Link to="/dashboard/seller">All Sellers</Link>
            </li>
      
            <li>
              <Link to="/dashboard/buyer">All Buyers</Link>
            
            </li>
            <li>
            <Link to="/dashboard/approvedpost">Approved Request  </Link>
            
            </li>
        
            <li>
            <Link to="/dashboard/reporteditems">Reported Items </Link>
            
            </li>
            
            </>
           }

           {
            isSellers && <>
              <li>
                  <Link to="/dashboard/addproducts">Add A Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproducts">My Products</Link>
                </li>
            </>
           }

           {
            isBuyers && 
            <>
            <li>
              <Link to="/dashboard/myorders">My Orders</Link>
            </li>
          
          </>
           }
             
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLeyout;
