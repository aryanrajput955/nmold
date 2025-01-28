import React from 'react'
import { Link } from 'react-router-dom'
const Fullintegration = () => {
  return (
<>
<div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div class="absolute inset-0">
    <img src="./full.png" alt="Background Image" class="object-cover object-center w-full h-full" />
    <div class="absolute inset-0 bg-black opacity-50"></div>
  </div>

  <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 class="text-5xl font-bold font-jost leading-tight mb-4">Full Integration Of All Automations</h1>
    <p class="text-xl font-jost text-gray-300 mb-8">In a single screen on your wall.</p>
    <Link to={"/contact"}>
    <button href="#" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform font-jost hover:scale-105 hover:shadow-lg">Contact Us Now</button>
    </Link>
  </div>
</div>
<div className="bg-black py-10 lg:py-20 flex flex-col lg:flex-row justify-between px-6 sm:px-12 md:px-20 lg:px-40 items-center">
  <div className="text-white mb-8 lg:mb-0 lg:w-[50%]">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-josefin font-semibold dark:text-white">
      Centralized Control, Simplified Living
    </h2>
    <p className="text-lg sm:text-xl font-jost mt-4 lg:w-[80%]">
      Gone are the days of juggling multiple remotes or apps. With centralized
      control, you can manage every aspect of your home from a single interface.
      Use a stylish wall-mounted panel for quick adjustments or your phone/tablet
      when you’re on the go. The system is intuitive, easy to use, and designed to
      simplify your daily life.
    </p>
  </div>
  <div className="lg:w-[40%]">
    <img
      className="h-[280px] sm:h-[350px] md:h-[420px] lg:h-[480px] w-full object-cover"
      src="./multimedia2.png"
      alt="Centralized Control"
    />
  </div>
</div>

<section class="w-full mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
  <div class="w-full h-full flex flex-col items-center md:py-4 py-10">

    <div
      class="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">

      <img class="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src="./full2.png" alt="billboard image" />

      <div class="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
        <h2 class="text-4xl font-josefin font-semibold text-gray-900 dark:text-white">Full Home Integration – Seamless Smart Living</h2>
        <p class="text-lg font-jost mt-4">Transform your home into a smart haven with Full Integration, where every system works together effortlessly. From lighting and HVAC to blinds, energy monitoring, AV, security, and door entry, our solution unites it all into one intuitive system. </p>
      </div>

    </div>

    <div
      class="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
 
      <div class="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
        <h2 class="text-4xl font-josefin  font-semibold text-gray-900 dark:text-white">What It Can Do?</h2>

        <p class=" font-jost  text-lg mt-4"><strong>Fully Automated:</strong> Experience true convenience with automation that learns and adapts to your lifestyle. Let your home take care of itself, so you don’t have to reach for your phone every few minutes.<br/><br/>
        <strong>Touch of a Button:</strong> Whether it’s a sleek wall-mounted interface or your phone/tablet, control your entire home effortlessly whenever you need it.<br/><br />
Enjoy smarter living with enhanced comfort, energy efficiency, and peace of mind—all tailored to your needs. Welcome to the future of home automation! </p>
      </div>

      <img class="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src="./every.png" alt="billboard image" />

    </div>
  </div>
</section>


</>
  )
}

export default Fullintegration
