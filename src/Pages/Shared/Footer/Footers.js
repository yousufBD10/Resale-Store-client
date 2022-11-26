import { Footer } from 'flowbite-react';
import React from 'react';
import logo from '../../../assets/info_image/resale.png'

const Footers = () => {
    return (
        <Footer className='mt-8' container={true}>
  <div className="w-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
     <div className='flex'>
     <Footer.Brand
     
     src={logo}
     alt="Logo"
     
   />
   <h2 className='font-bold text-xl'>Resale Store</h2>
     </div>
      <Footer.LinkGroup>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </div>
    <Footer.Divider />
    <Footer.Copyright
      href="#"
      by="Resale Store™"
      year={2022}
    />
  </div>
</Footer>
    );
};

export default Footers;