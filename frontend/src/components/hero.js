import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
        <div className=" w-full">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="  flex ">
              <div data-aos="fade-right" className=" lg:w-1/2 w-full bg-gray-900 relative flex flex-col items-start p-6 sm:p-8  lg:pt-40">
              <div className="hidden lg:block absolute top-10 right-0 w-10 h-20 md:w-14 md:h-28 lg:w-16 lg:h-32 rounded-tl-full rounded-bl-full bg-neutral-600 z-0"></div>
              <div className="flex items-start w-full">
            <h1 className="text-white font-light font-Dm  text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-5">
              NMOLD
            </h1>
          </div>
          <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl font-jost">
          <i>
            Bringing Ideas To Life
            </i> 
          </h2>
          <p className="text-white font-jost  text-xs sm:text-sm md:text-base lg:text-lg mt-4 w-full md:w-[90%] lg:w-[500px]">
NMOLD is a leading provider of premium lighting and home automation solutions, dedicated to transforming living spaces into smart, energy-efficient environments. Specializing in state-of-the-art lighting designs and cutting-edge automation technologies.

          </p>
          <div className="mt-6">
            <Link to={"/contact"}>
            <button className="font-josefin w-32 sm:w-36 md:w-40 h-10 sm:h-12 md:h-14 bg-white cursor-pointer rounded-lg border-2 border-gray-500 shadow-[inset_0px_-2px_0px_1px_#1F1F1F]  hover:bg-neutral-200 transition duration-300 ease-in-out">
              <span className="font-medium text-[#333] group-hover:text-black  ">
                Contact Us
              </span>
            </button>
            </Link>
          </div>
          <div className="hidden lg:block absolute bottom-3 left-0 w-10 h-20 md:w-14 md:h-28 lg:w-16 lg:h-32 rounded-tr-full rounded-br-full bg-gray-600"></div>
          <div className="hidden lg:block absolute bottom-20 rotate-180  right-0 w-10 h-20 md:w-14 md:h-28 lg:w-16 lg:h-32 rounded-tr-full rounded-br-full bg-gray-600"></div>
              </div>
              <div data-aos="fade-left" className=" w-1/2">
              <img
                className="h-screen w-full object-cover"
                src="./hardware.jpg"
                alt="Slide 1"
                />
              </div>
                </div>
           
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" h-screen w-full object-cover"
                src="./lg9.png"
                alt="Slide 2"
              />
            </SwiperSlide>
            <SwiperSlide>
            <img
    className="h-[40vh] sm:h-[60vh] md:h-[75vh] lg:h-screen w-full object-cover"
    src="./lg12.png"
    alt="Slide 3"
  />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    
  );
};

export default Hero;
