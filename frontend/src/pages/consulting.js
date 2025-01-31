import React from 'react';
import { Link } from 'react-router-dom';

const Consulting = () => {
  return (
    <div className=' justify-center flex flex-col lg:flex-row gap-10 lg:gap-20 px-5 md:px-10'>
      {/* Energy Consulting */}
      <Link to={'/energy-consulting'}>
        <div data-aos='fade-right' className='relative w-full md:w-[570px] py-10 md:py-20 mx-auto'>
          <h1 className='font-josefin font-semibold text-xl md:text-4xl absolute left-1/2 transform -translate-x-1/2 top-[50%] md:top-[250px] text-brown-50 z-50 text-center'>
            Energy Consulting & Auditing
          </h1>
          {/* Image Container */}
          <img
            className='z-0 mx-auto h-[250px] md:h-[400px] w-full md:w-[550px] object-cover'
            src='./Solar.png'
            alt='Energy Consulting'
          />
          {/* Overlay Div */}
          <div className='absolute top-10 md:top-20 inset-0 bg-black bg-opacity-40 h-[250px] md:h-[400px] w-full md:w-[550px] z-10 border-black border-b-[10px] md:border-b-[15px] border-l-[10px] md:border-l-[15px] mx-auto'></div>
        </div>
      </Link>

      {/* Electrical Consulting */}
      <Link to={'/electrical-consulting'}>
        <div data-aos='fade-left' className='relative w-full md:w-[570px] py-10 md:py-36 mx-auto'>
          <h1 className='font-josefin font-semibold text-xl md:text-4xl absolute left-1/2 transform -translate-x-1/2 top-[50%] md:top-[300px] text-brown-50 z-50 text-center'>
            Electrical Consulting & Projects
          </h1>
          {/* Image Container */}
          <img
            className='z-0 mx-auto h-[250px] md:h-[400px] w-full md:w-[550px] object-cover'
            src='./Solar.png'
            alt='Electrical Consulting'
          />
          {/* Overlay Div */}
          <div className='absolute top-10 md:top-36 inset-0 bg-black bg-opacity-40 h-[250px] md:h-[400px] w-full md:w-[550px] z-10 border-black border-r-[10px] md:border-r-[15px] border-b-[10px] md:border-b-[15px] mx-auto'></div>
        </div>
      </Link>
    </div>
  );
};

export default Consulting;
