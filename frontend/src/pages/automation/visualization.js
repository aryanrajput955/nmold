import React from 'react'

const Visualization = () => {
    return (
        <>
            <div
                data-aos='fade-up'
                data-aos-anchor-placement='bottom-bottom'
                className='relative pt-4'>
                {/* Text Layer */}
                <div className='absolute inset-0 flex flex-col justify-center items-center z-50'>
                    <h1 className='blur-lg font-josefin font-semibold leading-snug text-center text-5xl sm:text-6xl md:text-7xl text-gray-600'>
                        Take Control Of Everything
                        <br /> From One App
                    </h1>
                    <h1 className='font-josefin font-semibold leading-snug text-center text-5xl sm:text-6xl md:text-7xl text-deep-orange-50 absolute'>
                        Take Control Of Everything
                        <br /> From One App
                    </h1>
                </div>

                {/* Image Container */}
                <div className='relative w-full h-[25rem] sm:h-[30rem] md:h-[35rem]'>
                    <img
                        className='absolute inset-0 w-full h-full object-cover z-0'
                        src='./visualization.jpg'
                        alt='Blind Automation'
                    />
                    {/* Overlay Div */}
                    <div className='absolute inset-0 bg-black bg-opacity-40 z-10'></div>
                </div>
            </div>
            <div className="bg-[#F5F5F5] flex flex-col md:flex-row md:gap-30 h-auto w-full p-5 pl-20 md:h-[42rem]">
                <section class="mt-16 max-w-xl mx-auto px-2">
                    <h2 class="text-2xl font-josefin font-bold text-gray-900 sm:text-3xl">
                        How Our App Works?
                    </h2>
                    <ul class="mt-6 space-y-4 font-jost text-2xl text-gray-600">
                        <li class="flex items-start">
                            <svg class="flex-shrink-0 w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="ml-3"><b>Control from Anywhere:</b>
                                Manage your home automation system remotely via smartphone apps or web interfaces, whether you’re at work or traveling.

                            </span>
                        </li>
                        <li class="flex items-start">
                            <svg class="flex-shrink-0 w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="ml-3"><b>  Voice Assistance Integration:</b>
                                Use voice commands with smart assistants like Alexa, Google Assistant, or Siri to adjust settings instantly.</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="flex-shrink-0 w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="ml-3"><strong>Geofencing Technology:</strong>
                                Automate operations like turning on lights or adjusting HVAC systems based on your proximity to home.

                            </span>
                        </li>
                        <li class="flex items-start">
                            <svg class="flex-shrink-0 w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="ml-3"><strong>Real-Time Notifications:</strong>
                                Stay updated with alerts about security breaches, energy usage, or appliance statuses, enabling quick action from anywhere.</span>
                        </li>
                    </ul>
                </section>

                <div className="w-full flex justify-center pt-10 md:pt-20">
                    <img src="./visualization2.jpg" alt="" />
                </div>
            </div>

        </>
    )
}

export default Visualization
