import React from 'react'
import pcc from '../images/pcc.png'
import mcc from '../images/mcc.jpeg'
import apfc from '../images/apfc.jpg'

const Engineering = () => {
	return (
		<>
			<div className='bg_engineering'>
				<div  className='h-[550px] flex flex-col justify-center items-center bg-black opacity-70 text-white'>
					<h2 data-aos="fade-down" className=' font-semibold text-5xl font-josefin'>ENGINEERING</h2>
					<p data-aos="fade-down" className='w-[50rem] text-lg mt-6 font-jost '>
						<span className='font-semibold'>Electrical panels: </span>
						We design and manufacture various Electrical panels such as Power
						control centre (PCC), Motor control centre (MCC), Automatic power
						Factor correction (APFC) Panels. These panels are custom designed
						and simulated for client needs to ensure maximum safety and
						uninterrupted working of machines. These panels are designed for
						indoor and outdoor environment applications with various IP ratings.
						Our high-end panels come with remote monitoring of your energy usage
						and devices. Which gives you detailed information about your energy
						usage and status of your devices.
					</p>
				</div>
			</div>
			{/* PCC Panel */}
			<div className='flex h-[60vh] justify-between px-40 items-center'>
				<div data-aos="fade-right" data-aos-once="true" className='w-[50%] pr-10'>
					<h2 className=' font-semibold text-4xl font-josefin'>
						Power control centre (PCC) Panel
					</h2>
					<p className=' mt-6 text-lg font-jost'>
						Electrical panels: We design and manufacture various Electrical
						panels such as Power control centre (PCC), Motor control centre
						(MCC), Automatic power Factor correction (APFC) Panels. These panels
						are custom designed and simulated for client needs to ensure maximum
						safety and uninterrupted working of machines. These panels are
						designed for indoor and outdoor environment applications with
						various IP ratings. Our high-end panels come with remote monitoring
						of your energy usage and devices. Which gives you detailed
						information about your energy usage and status of your devices.
					</p>
				</div>
				<div data-aos="fade-left" data-aos-once="true" className='flex h-[400px] justify-center items-center'>
					<img
						className='h-[400px] object-contain'
						src={pcc}
						alt='PCC'
					/>
				</div>
			</div>
			{/* MCC Panel */}
			<div className='flex h-[60vh] bg-black text-slate-100 justify-between py-20 px-40 items-center'>
				<div data-aos="fade-left" data-aos-once="true" className='flex justify-center items-center'>
					<img
						className='h-[400px] object-contain'
						src={mcc}
						alt='MCC'
					/>
				</div>
				<div data-aos="fade-right" data-aos-once="true" className='w-[50%] pl-10'>
					<h2 className=' font-semibold text-4xl font-josefin'>
						Motor control centre (MCC) Panel
					</h2>
					<p className=' mt-6 text-lg font-jost'>
						Electrical panels: We design and manufacture various Electrical
						panels such as Power control centre (PCC), Motor control centre
						(MCC), Automatic power Factor correction (APFC) Panels. These panels
						are custom designed and simulated for client needs to ensure maximum
						safety and uninterrupted working of machines. These panels are
						designed for indoor and outdoor environment applications with
						various IP ratings. Our high-end panels come with remote monitoring
						of your energy usage and devices. Which gives you detailed
						information about your energy usage and status of your devices.
					</p>
				</div>
			</div>
			<div className='flex h-[60vh] justify-between px-40 items-center'>
				<div data-aos="fade-left" data-aos-once="true" className='w-[50%] pr-10'>
					<h2 className=' font-semibold text-4xl font-josefin'>
						Automatic power Factor correction (APFC) Panels
					</h2>
					<p className=' mt-6 text-lg font-jost'>
						Electrical panels: We design and manufacture various Electrical
						panels such as Power control centre (PCC), Motor control centre
						(MCC), Automatic power Factor correction (APFC) Panels. These panels
						are custom designed and simulated for client needs to ensure maximum
						safety and uninterrupted working of machines. These panels are
						designed for indoor and outdoor environment applications with
						various IP ratings. Our high-end panels come with remote monitoring
						of your energy usage and devices. Which gives you detailed
						information about your energy usage and status of your devices.
					</p>
				</div>
				<div data-aos="fade-right" data-aos-once="true" className='flex h-[400px] justify-center items-center'>
					<img
						className='h-[400px] object-contain'
						src={apfc}
						alt='APFC'
					/>
				</div>
			</div>
		</>
	)
}

export default Engineering
