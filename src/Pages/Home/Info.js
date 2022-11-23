import React from 'react';
import essential from '../../assets/info_image/essential.svg'
import location from '../../assets/info_image/location.svg'
import trusted from '../../assets/info_image/trusted.svg'

const Info = () => {
    return (
        <div className='lg:flex'>
            <div className=' lg:px-3 sm:px-32 mb-8'>
            <div className='flex justify-center'>
            <img src={essential} alt="" />
            </div>
            <div className='text-center'>
            <h2 className='text-2xl font-bold'>Essential</h2>
             <p className='font-bold'>Relevant news and information from neighbors, businesses, and public agencies in real time.</p>
            </div>
            </div>
            <div className=' lg:px-3 sm:px-32 mb-8'>
            <div className='flex justify-center'>
            <img src={location} alt="" />
            </div>
            <div className='text-center'>
            <h2 className='text-2xl font-bold'>Local</h2>
             <p className='font-bold'>The only way to instantly connect to the people, businesses, and happenings near your home.</p>
            </div>
            </div>
            <div className=' lg:px-3 sm:px-32 mb-8'>
            <div className='flex justify-center'>
            <img src={trusted} alt="" />
            </div>
            <div className='text-center'>
            <h2 className='text-2xl font-bold'>Trusted</h2>
             <p className='font-bold'>A secure environment where all neighbors are verified.</p>
            </div>
            </div>
            
           
        </div>
    );
};

export default Info;