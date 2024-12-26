import React from 'react'
import { Link } from 'react-router-dom'
const Bind_automation = () => {
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
      WELCOME TO<br /> NMOLD BLIND AUTOMATIONS
    </h1>
    <h1 className="font-josefin font-semibold leading-snug text-center text-5xl sm:text-6xl md:text-7xl text-deep-orange-50 absolute">
      WELCOME TO<br /> NMOLD BLIND AUTOMATIONS
    </h1>
  </div>

  {/* Image Container */}
  <div className="relative w-full h-[25rem] sm:h-[30rem] md:h-[35rem]">
    <img
      className="absolute inset-0 w-full h-full object-cover z-0"
      src="./blind3.jpg"
      alt="Blind Automation"
    />
    {/* Overlay Div */}
    <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
  </div>
</div>


<section class="w-full mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
  <div class="w-full h-full flex flex-col items-center md:py-4 py-10">

    <div
      class="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">

      <img class="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src="./blind1.png" alt="billboard image" />

      <div class="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
        <h2 class="text-4xl font-josefin font-semibold text-gray-900 dark:text-white">Introduction to Blind Automation</h2>
        <p class="text-lg font-jost mt-4">Blind automation is a powerful approach to automating repetitive tasks and workflows without requiring ongoing manual oversight or input. It operates on pre-defined rules and logic, enabling businesses to streamline operations and reduce dependency on human intervention. By removing manual effort, blind automation minimizes errors and boosts efficiency, making it a cornerstone of modern industrial, business, and software processes. </p>
      </div>

    </div>

    <div
      class="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
 
      <div class="md:w-[50%] w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 p-0 rounded-md">
        <h2 class="text-4xl font-josefin  font-semibold text-gray-900 dark:text-white">Why Choose Blind Automation at Home?</h2>

        <p class=" font-jost  text-lg mt-4">Blind automation in a home setting offers a simple, reliable, and cost-effective way to enhance convenience, safety, and energy efficiency. Unlike intelligent systems that rely on advanced sensors or machine learning, blind automation uses pre-set rules and schedules to perform repetitive tasks. For many homeowners, this straightforward approach is not only easier to implement but also more practical for common household needs.

One of the biggest advantages of blind automation at home is its predictability. Tasks like turning lights on and off, adjusting thermostat settings, or watering the garden can be programmed based on specific times or routines. </p>
      </div>

      <img class="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src="./blind2.png" alt="billboard image" />

    </div>
  </div>
</section>
<section class="py-12 md:py-14">
    <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
        <div class="shadow rounded-xl">
            <div class="grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-blue-500 rounded-xl">
                <aside class="p-8 space-y-4 md:p-16">
                    <h2 class="text-2xl font-bold tracking-tight md:text-4xl font-headline">
                        Ready to dive in?
                        Get Your Blinds Automated Toaday!
                    </h2>

                    <p class="font-medium text-blue-100 md:text-2xl">
                       Its always good to buy something exciting ,contact Us to get more information
                    </p>

                    <div>
                      <Link to={"/contact"}>
                        <button class=" transform transition-transform duration-300 ease-in-out hover:scale-110   bg-white font-jost text-xl text-blue-800 px-4 py-2 mt-3 rounded-xl">
                            Contact us
                        </button>
                      </Link>
                    </div>
                </aside>

                <aside class="relative hidden md:block">
                    <img class="absolute inset-0 object-cover w-full h-full mt-16 -mr-16 rounded-tl-lg" src="https://www.somfy.co.in/common/img/library///1050x600_cover/AMS_Lukkien_2018_72_web.jpg" alt="Discover our beautiful panel"/>
                </aside>
            </div>
        </div>
    </div>
</section>
</div>
</>
  )
}

export default Bind_automation
