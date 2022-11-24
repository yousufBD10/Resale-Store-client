import React from 'react';
import { Link} from "react-router-dom";

import err from '../../assets/info_image/404-error-3702359-3119148.webp'

const DisplayErrors = () => {
    return (
        <div >
            <h2 className='text-6xl pt-7 text-center '>Oppps! </h2>
            <h2 className='text-4xl text-center text-center mt-5'>404 - Page Not Found </h2>
            <div className='flex  justify-center'>
                <img className='w-96' src={err} alt="" />
            </div>
            <p className='text-2xl text-center font-semibold md:text-3xl mb-8 text-red-600'>
            Sorry, we couldn't find this page.
          </p>
          
         <div className='flex justify-center'>
         <Link
            to='/'
             type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "> Back to home
          </Link>
         </div>
        </div>
    );
};

export default DisplayErrors;