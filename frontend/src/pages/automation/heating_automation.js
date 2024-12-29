import React from 'react'
import { Link } from 'react-router-dom'
const Heating_automation = () => {
  return (
    <>
    <div>
    <div
  data-aos="fade-up"
  data-aos-anchor-placement="bottom-bottom"
  className="relative pt-4"
>
  {/* Text Layer */}
  <div className="absolute inset-0 flex flex-col justify-center items-center z-50">
    <h1 className="blur-sm  font-josefin font-semibold leading-snug text-center text-5xl sm:text-6xl md:text-7xl text-gray-600">
      WELCOME TO<br />NMOLD HVAC Services
    </h1>
    <h1 className="font-josefin font-semibold leading-snug text-center text-5xl sm:text-6xl md:text-7xl text-deep-orange-50 absolute">
      WELCOME TO<br /> NMOLD HVAC Services
    </h1>
  </div>

  {/* Image Container */}
  <div className="relative w-full h-[25rem] sm:h-[30rem] md:h-[35rem]">
    <img
      className="absolute inset-0 w-full h-full object-cover z-0"
      src="./hvac3.jpg"
      alt="hvac Automation"
    />
    {/* Overlay Div */}
    <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
  </div>
</div>
{/* ******************************** */}

<section class="py-10 bg-gray-50 dark:bg-slate-800 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-xl mx-auto text-center">
            <p class="text-sm tracking-widest text-blue-600 dark:text-sky-300 font-bold uppercase">Your Home, Your Climate – Automated for Ultimate Convenience.</p>

            <h2 class="mt-6 text-3xl font-bold leading-tight text-black dark:text-slate-50 sm:text-4xl lg:text-5xl">Energy-Efficient. Smart. Personalized. Welcome to the Future of HVAC</h2>
        </div>

        <div class="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
            <div class="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
                <div class="flex items-start">
                 <img  className="h-9 w-9 flex-shrink-0" src='./heat.png'>
                 </img>
                    <div class="ml-5">
                        <h3 class="text-xl font-semibold text-black dark:text-slate-50">Customised Temprature Control</h3>
                        <p class="mt-3 text-base text-gray-600 dark:text-slate-300">Includes devices like furnaces, boilers, and heat pumps that warm indoor spaces during colder months.
                        Uses fuel sources like gas, electricity, or oil to generate heat.</p>
                    </div>
                </div>

                <div class="flex items-start">
                <img  className="h-9 w-9 flex-shrink-0" src='./ventilation.png'>
                 </img>
                    <div class="ml-5">
                        <h3 class="text-xl font-semibold text-black dark:text-slate-50">Ventilation</h3>
                        <p class="mt-3 text-base text-gray-600 dark:text-slate-300">Involves the exchange of indoor and outdoor air to improve air quality.
                        Removes moisture, odors, smoke, dust, and airborne contaminants while bringing in fresh air.</p>
                    </div>
                </div>

                <div class="flex items-start">
                <img  className="h-9 w-9 flex-shrink-0" src='./air-conditioning.png'>
                </img>
                    <div class="ml-5">
                        <h3 class="text-xl font-semibold text-black dark:text-slate-50">Air Conditioning</h3>
                        <p class="mt-3 text-base text-gray-600 dark:text-slate-300">Cools indoor spaces by removing heat and maintaining humidity levels during warmer months.
                        Uses refrigerants and compressors to regulate cooling efficiently.</p>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-3">
                <img class="w-full rounded-lg shadow-xl" src="./hvac2.png" alt="Dashboard screenshot" />
            </div>
        </div>
    </div>
</section>

{/* ***************************** */}
<section class="relative z-10 overflow-hidden bg-[#1F1F1F] py-16 px-8 ">
    <div class="container">
        <div class="-mx-4 flex flex-wrap items-center">
            <div class="w-full px-4 lg:w-1/2">
                <div class="text-center lg:text-left ">
                    <div class="mb-10 lg:mb-0 ">
                        <h1
                            class="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-white ">
                            Start building automated<br/> home today!</h1>
                        <p
                            class="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white">
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full px-4 lg:w-1/2">
                <div class="text-center lg:text-right">
                    <Link to={"/contact"}>
                    <button
                        class="font-semibold rounded-lg mx-auto inline-flex items-center justify-center bg-white py-4 px-9 hover:bg-opacity-90"
                        >Get in Touch Today</button>
                        </Link>
                </div>
            </div>
        </div>
    </div>
    <span class="absolute top-0 right-0 -z-10">
        <svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6910)"></path><defs><linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span class="absolute top-0 right-0 -z-10"><svg width="324" height="250" viewBox="0 0 324 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6911)"></path><defs><linearGradient id="paint0_linear_971_6911" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span class="absolute top-4 left-4 -z-10"><svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="40.9984" cy="1.49626" r="1.49626" transform="rotate(90 40.9984 1.49626)" fill="white"></circle><circle cx="27.8304" cy="1.49626" r="1.49626" transform="rotate(90 27.8304 1.49626)" fill="white"></circle><circle cx="14.6644" cy="1.49626" r="1.49626" transform="rotate(90 14.6644 1.49626)" fill="white"></circle><circle cx="1.49642" cy="1.49626" r="1.49626" transform="rotate(90 1.49642 1.49626)" fill="white"></circle><circle cx="40.9984" cy="14.6642" r="1.49626" transform="rotate(90 40.9984 14.6642)" fill="white"></circle><circle cx="27.8304" cy="14.6642" r="1.49626" transform="rotate(90 27.8304 14.6642)" fill="white"></circle><circle cx="14.6644" cy="14.6642" r="1.49626" transform="rotate(90 14.6644 14.6642)" fill="white"></circle><circle cx="1.49642" cy="14.6642" r="1.49626" transform="rotate(90 1.49642 14.6642)" fill="white"></circle><circle cx="40.9984" cy="27.8302" r="1.49626" transform="rotate(90 40.9984 27.8302)" fill="white"></circle><circle cx="27.8304" cy="27.8302" r="1.49626" transform="rotate(90 27.8304 27.8302)" fill="white"></circle><circle cx="14.6644" cy="27.8302" r="1.49626" transform="rotate(90 14.6644 27.8302)" fill="white"></circle><circle cx="1.49642" cy="27.8302" r="1.49626" transform="rotate(90 1.49642 27.8302)" fill="white"></circle><circle cx="40.9984" cy="40.9982" r="1.49626" transform="rotate(90 40.9984 40.9982)" fill="white"></circle><circle cx="27.8304" cy="40.9963" r="1.49626" transform="rotate(90 27.8304 40.9963)" fill="white"></circle><circle cx="14.6644" cy="40.9982" r="1.49626" transform="rotate(90 14.6644 40.9982)" fill="white"></circle><circle cx="1.49642" cy="40.9963" r="1.49626" transform="rotate(90 1.49642 40.9963)" fill="white"></circle><circle cx="40.9984" cy="54.1642" r="1.49626" transform="rotate(90 40.9984 54.1642)" fill="white"></circle><circle cx="27.8304" cy="54.1642" r="1.49626" transform="rotate(90 27.8304 54.1642)" fill="white"></circle><circle cx="14.6644" cy="54.1642" r="1.49626" transform="rotate(90 14.6644 54.1642)" fill="white"></circle><circle cx="1.49642" cy="54.1642" r="1.49626" transform="rotate(90 1.49642 54.1642)" fill="white"></circle></g>
        </svg>
    </span>
</section>

{/* ******************************** */}

<div class="bg-gray-200 px-2 py-10">

  <div id="features" class="mx-auto max-w-6xl">
    <p class="text-center font-josefin text-xl font-semibold leading-7 text-primary-500">Features</p>
    <h2 class="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
      Writing has never been so easy
    </h2>
    <ul class="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">

        <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" class="mx-auto h-10 w-10"></img>
        <h3 class="my-3 font-jost font-display font-medium">Energy Efficiency</h3>
        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
        Reduce energy consumption by avoiding unnecessary heating or cooling in unoccupied spaces.
        </p>

      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">

        <img src="https://www.svgrepo.com/show/530442/port-detection.svg" alt="" class="mx-auto h-10 w-10">
              </img>
        <h3 class="my-3  font-jost font-display font-medium">Cost Savings</h3>
        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
        Lower utility bills through efficient energy usage and optimized operation.
        </p>
      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <img src="https://www.svgrepo.com/show/530444/availability.svg" alt="" class="mx-auto h-10 w-10"></img>
        <h3 class="my-3 font-jost font-display font-medium">Enhanced Comfort</h3>
        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
        Maintain consistent indoor temperatures tailored to your preferences.
        </p>

      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <a href="/pricing" class="group">
          <img src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" class="mx-auto h-10 w-10"></img>
          <h3 class="my-3 font-jost font-display font-medium group-hover:text-primary-500">Improved Air Quality</h3>
          <p class="mt-1.5 text-sm leading-6 text-secondary-500">Automate ventilation systems to ensure fresh air circulation and manage humidity levels.</p>
        </a>
      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <a href="/templates" class="group">
          <img src="https://www.svgrepo.com/show/530450/page-analysis.svg" alt="" class="mx-auto h-10 w-10"></img>
          <h3 class="my-3 font-jost font-display font-medium group-hover:text-primary-500">
          Convenience
          </h3>
          <p class="mt-1.5 text-sm leading-6 text-secondary-500">Enjoy hands-free control with automation and remote management through mobile apps. </p>
        </a>
      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <a href="/download" class="group">
          <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" class="mx-auto h-10 w-10"></img>
          <h3 class="my-3 font-jost font-display font-medium group-hover:text-primary-500">Health and Air Quality</h3>
          <p class="mt-1.5 text-sm leading-6 text-secondary-500">Proper ventilation reduces allergens, pollutants, and pathogens, promoting a healthier living environment</p>
        </a>
      </li>
    </ul>
  </div>
</div>

    </div>
    </>
  )
}

export default Heating_automation
