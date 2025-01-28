import React from 'react';
import img1 from '../../images/engineering_banner.jpg';
import img2 from '../../images/multimedia.jpg';

const MonitorAndServices = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="relative pt-4"
      >
        {/* Text Layer */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-50">
          <h1 className="blur-sm font-josefin font-semibold leading-snug text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-600">
            WELCOME TO
            <br /> MONITOR & SERVICES
          </h1>
          <h1 className="font-josefin font-semibold leading-snug text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-deep-orange-50 absolute">
            WELCOME TO
            <br /> MONITOR & SERVICES
          </h1>
        </div>

        {/* Image Container */}
        <div className="relative w-full h-[18rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem]">
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="./blind3.jpg"
            alt="Blind Automation"
          />
          {/* Overlay Div */}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-10 lg:py-20 flex flex-col lg:flex-row justify-between items-center px-6 sm:px-12 md:px-20 lg:px-40">
        <div className="mb-8 lg:mb-0 lg:w-[40%] flex justify-center">
          <img
            className="h-[280px] sm:h-[350px] md:h-[400px] lg:h-[480px] aspect-square object-cover"
            src={img1}
            alt="Introduction to Monitor & Services"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-josefin font-semibold text-black">
            Introduction to Monitor & Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-jost mt-4 text-black">
            Monitor your home and environment, CO2 levels because your health
            and safety come first. Monitor your home air quality to ensure your
            family’s health in a polluted environment like ours. Monitor your
            energy usage and integrate your fire security system for complete
            peace of mind. By removing manual effort, blind automation minimizes
            errors and boosts efficiency, making it a cornerstone of modern
            industrial, business, and software processes.
          </p>
        </div>
      </div>

      {/* Why Choose Monitor & Services Section */}
      <div className="py-10 lg:py-20 flex flex-col lg:flex-row-reverse justify-between items-center px-6 sm:px-12 md:px-20 lg:px-40">
        <div className="mb-8 lg:mb-0 lg:w-[40%] flex justify-center">
          <img
            className="h-[280px] sm:h-[350px] md:h-[400px] lg:h-[60vh] w-full lg:w-[30rem] object-cover"
            src={img2}
            alt="Why Choose Monitor & Services"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-josefin font-semibold text-gray-900">
            Why choose Monitor & Services?
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-jost mt-4 text-gray-900">
            Blind automation is a powerful approach to automating repetitive
            tasks and workflows without requiring ongoing manual oversight or
            input. It operates on pre-defined rules and logic, enabling
            businesses to streamline operations and reduce dependency on human
            intervention. By removing manual effort, blind automation minimizes
            errors and boosts efficiency, making it a cornerstone of modern
            industrial, business, and software processes.
          </p>
        </div>
      </div>
    </>
  );
};

export default MonitorAndServices;


