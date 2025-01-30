import React from 'react';
import pcc from '../images/pcc.png';
import mcc from '../images/mcc.jpeg';
import apfc from '../images/apfc.jpg';

const Engineering = () => {
  return (
    <>
      <div className=' bg_engineering h-[550px] flex flex-col justify-center items-center text-white text-center px-6 md:px-12 bg-white'>
        <div className='h-[550px] flex flex-col justify-center items-center bg-black opacity-70 text-white text-center px-6 md:px-12'>
          <h2 data-aos='fade-down' className='font-semibold text-4xl md:text-5xl font-josefin'>ENGINEERING</h2>
          <p data-aos='fade-down' className='max-w-4xl text-base md:text-lg mt-6 font-jost'>
            <span className='font-semibold'>Electrical panels: </span>
            We design and manufacture various Electrical panels such as Power
            Control Centre (PCC), Motor Control Centre (MCC), and Automatic Power
            Factor Correction (APFC) Panels. These panels are custom-designed and
            simulated for client needs to ensure maximum safety and
            uninterrupted machine operation.
          </p>
        </div>
      </div>

      {/* Panel Sections */}
      {[{ title: 'Power Control Centre (PCC) Panel', img: pcc }, { title: 'Motor Control Centre (MCC) Panel', img: mcc, reverse: true, bg: 'bg-black text-white' }, { title: 'Automatic Power Factor Correction (APFC) Panels', img: apfc }].map((panel, index) => (
        <div key={index} className={`flex flex-wrap ${panel.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} justify-between items-center py-10 md:py-20 px-6 md:px-40 ${panel.bg || 'bg-white text-black'}` }>
          <div data-aos='fade-right' className='w-full md:w-1/2 text-center md:text-left px-4'>
            <h2 className='font-semibold text-3xl md:text-4xl font-josefin'>{panel.title}</h2>
            <p className='mt-4 text-base md:text-lg font-jost'>
              These panels are custom-designed and simulated for client needs to ensure maximum safety and
              uninterrupted working of machines. Designed for both indoor and outdoor applications with various IP ratings,
              they come with remote monitoring to provide detailed insights into energy usage and device status.
            </p>
          </div>
          <div data-aos='fade-left' className='flex justify-center items-center w-full md:w-1/2 mt-6 md:mt-0'>
            <img className='h-60 md:h-96 object-contain' src={panel.img} alt={panel.title} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Engineering;
