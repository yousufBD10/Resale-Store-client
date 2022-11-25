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
      <div className="drawer drawer-mobile">
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
              <Link to="/dashboard/allsellers">All Sellers</Link>
            </li>
            <li>
              <Link to="/dashboard/allbuyers">All Buyers</Link>
            
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
