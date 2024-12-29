import React from 'react'
import img1 from '../../images/security.jpeg'
import img2 from '../../images/security2.jpg'
import bg_image from '../../images/security_banner.webp'

const Security = () => {
	return (
		<>
			<div
				data-aos='fade-up'
				data-aos-anchor-placement='bottom-bottom'
				className='relative pt-4'>
				{/* Text Layer */}
				<div className='absolute inset-0 flex flex-col justify-center items-center z-50'>
					<h1 className='blur-sm font-josefin font-semibold leading-snug text-center text-5xl sm:text-6xl md:text-7xl text-gray-600'>
						WELCOME TO
						<br /> SECURITY
					</h1>
					<h1 className='font-josefin font-semibold leading-snug text-center text-5xl sm:text-6xl md:text-7xl text-deep-orange-50 absolute'>
						WELCOME TO
						<br /> SECURITY
					</h1>
				</div>

				{/* Image Container */}
				<div className='relative w-full h-[25rem] sm:h-[30rem] md:h-[35rem]'>
					<img
						className='absolute inset-0 w-full h-full object-cover z-0'
						src={bg_image}
						alt='Blind Automation'
					/>
					{/* Overlay Div */}
					<div className='absolute inset-0 bg-black bg-opacity-40 z-10'></div>
				</div>
			</div>
			<div className='h-[70vh] flex justify-between px-40 items-center'>
				<div>
					<img
						className='h-[480px] aspect-square object-cover'
						src={img1}
					/>
				</div>
				<div className=''>
					<h2 class='text-4xl font-josefin font-semibold text-gray-900 '>
						Introduction to Security
					</h2>
					<p class='text-lg font-jost w-[40rem] mt-4'>
						Smart door locks that give easy access to friendly people while
						generate intrusion notification for unfamiliar people and record
						their clip. Smart VDP systems and Smart video surveillance and much
						more for a secure home and building. It operates on pre-defined
						rules and logic, enabling businesses to streamline operations and
						reduce dependency on human intervention. By removing manual effort,
						blind automation minimizes errors and boosts efficiency, making it a
						cornerstone of modern industrial, business, and software processes.{' '}
					</p>
				</div>
			</div>
			<div className=' h-[70vh] flex justify-between px-40 items-center'>
				<div className=''>
					<h2 class='text-4xl font-josefin font-semibold text-gray-900'>
						Why choose Security?
					</h2>
					<p class='text-lg font-jost w-[40rem] mt-4'>
						Blind automation is a powerful approach to automating repetitive
						tasks and workflows without requiring ongoing manual oversight or
						input. It operates on pre-defined rules and logic, enabling
						businesses to streamline operations and reduce dependency on human
						intervention. By removing manual effort, blind automation minimizes
						errors and boosts efficiency, making it a cornerstone of modern
						industrial, business, and software processes.{' '}
					</p>
				</div>
				<div>
					<img
						className='h-[60vh] w-[30rem] object-cover'
						src={img2}
					/>
				</div>
			</div>
		</>
	)
}

export default Security
