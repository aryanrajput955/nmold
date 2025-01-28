import React from 'react';
import img1 from '../../images/engineering_banner.jpg';
import img2 from '../../images/multimedia.jpg';

const Multimedia = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="relative pt-4"
      >
        {/* Text Layer */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-50">
          <h1 className="blur-sm font-josefin font-semibold leading-snug text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-600">
            WELCOME TO
            <br /> MULTIMEDIA
          </h1>
          <h1 className="font-josefin font-semibold leading-snug text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-deep-orange-50 absolute">
            WELCOME TO NMOLD
            <br /> MULTIMEDIA
          </h1>
        </div>

        {/* Image Container */}
        <div className="relative w-full h-[18rem] sm:h-[22rem] md:h-[28rem] lg:h-[35rem]">
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="./multimedia.png"
            alt="Blind Automation"
          />
          {/* Overlay Div */}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        </div>
      </div>

      <div className="bg-black py-10 lg:py-20 flex flex-col lg:flex-row justify-between items-center px-6 sm:px-12 md:px-20 lg:px-40">
        <div className="text-white mb-8 lg:mb-0 lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-josefin font-semibold">
            Introduction to Multimedia
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-jost mt-4">
            Multi-rooming in the entire house so that different zones have
            different vibes. TV, Music Systems and multimedia components and
            home theatre are integrated for maximum ease and enjoyment. It
            operates on pre-defined rules and logic, enabling businesses to
            streamline operations and reduce dependency on human intervention.
            By removing manual effort, blind automation minimizes errors and
            boosts efficiency, making it a cornerstone of modern industrial,
            business, and software processes.
          </p>
        </div>
        <div className="w-full lg:w-[40%] flex justify-center">
          <img
            className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[420px] aspect-square object-cover"
            src="./multimedia2.png"
            alt="Multimedia Example"
          />
        </div>
      </div>

      <div className="py-10 lg:py-20 flex flex-col lg:flex-row justify-between items-center px-6 sm:px-12 md:px-20 lg:px-40">
        <div className="w-full lg:w-[40%] flex justify-center mb-8 lg:mb-0">
          <img
            className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[70vh] w-full lg:w-[30rem] object-cover"
            src={img2}
            alt="Why Choose Multimedia"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-josefin font-semibold text-gray-900">
            Why choose Multimedia?
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-jost mt-4">
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

export default Multimedia;
