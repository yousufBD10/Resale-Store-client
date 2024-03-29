import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from '../../../assets/info_image/resale.png'

const Navbars = () => {
  const navigate = useNavigate()
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      navigate('/')

    })
    .catch(error=>console.error(error))
}
    return (
        <Navbar className='shadow-sm p-0 m-0'
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand to="/" className='px-12'>
        <Link to='/'>  <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt=" Logo"
          /></Link>
          <Link to='/'>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Resale Store
          </span></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='pr-12 pt-2 items-center'>
          <Link
            to="/"
           
          >
            Home
          </Link>
         {
          user &&  <Link
          to="/dashboard"
         
        >
       Dashboard
        </Link>
         }
          {/* <Navbar.Link to="/">
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Services
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Pricing
          </Navbar.Link> */}
         <Link to='/blog'>Blog</Link>
         {
           user?.uid ? <button onClick={handleLogOut} type="button" className="text-gray-900  focus:outline-none hover:bg-gray-100   font-medium  text-sm px-5  dark:bg-gray-800 dark:text-white  dark:hover:bg-gray-700  ">LogOut</button> :
           <>
           <Link to='/login'><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5  mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button></Link>
          <Link to='/register'><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button></Link>
           
           </>
        }
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Navbars;