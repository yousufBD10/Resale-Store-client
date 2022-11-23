import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbars = () => {
    return (
        <Navbar className='bg-sky-800 text-white '
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand to="/" className='px-12'>
        <Link>  <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          /></Link>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='pr-12'>
          <Link
            to="/"
           
          >
            Home
          </Link>
          <Navbar.Link to="/">
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Services
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Pricing
          </Navbar.Link>
         <Link>Contact</Link>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Navbars;