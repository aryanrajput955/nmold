import React, { useState } from 'react'
import Lighting_products from './Lighting_products'
// import bulb1 from '../images/bulb.png'
// import bulb2 from '../images/bulb2.png'
import down_arrow from '../images/down_arrow.png'
import { Link } from 'react-router-dom'

const Flood_Light_Series = () => {
	const [isFlood, setIsFlood] = useState(false)

	return (
		<>
			<div className='ml-6 mb-20 w-[800px]'>
				<h1 className='josefin text-3xl font-bold'>FLOOD LIGHT SERIES</h1>

				<div className=''>
					<div>
						<h1 className='mt-8 font-semibold text-2xl josefin'>
							SIMPLE AND POLE MOUNTED FLOOD LIGHTS
						</h1>
						<div className='flex flex-wrap mt-4 gap-10'>

							<Link to='/lighting/Flood Light 1'>
								<Lighting_products
									img_url='/product_images/flood_light_1.png'
									text='Flood Light 1'
								/>
							</Link>
							<Link to='/lighting/Flood Light 2'>
								<Lighting_products
									img_url='/product_images/flood_light_2.png'
									text='Flood Light 2'
								/>
							</Link>
							<Link to='/lighting/Flood Light 3'>
								<Lighting_products
									img_url='/product_images/flood_light_3.png'
									text='Flood Light 3'
								/>
							</Link>
						</div>
					</div>
					<div
						className={`transition-all ease-linear duration-300 flex gap-10 overflow-hidden flex-wrap mt-2 ${isFlood ? 'h-[90rem]' : 'h-0'
							}`}>
						<Link to='/lighting/Flood Light 4'>
							<Lighting_products
								img_url='/product_images/flood_light_4.png'
								text='Flood Light 4'
							/>
						</Link>
						<Link to='/lighting/Flood Light 5'>
							<Lighting_products
								img_url='/product_images/flood_light_5.png'
								text='Flood Light 5'
							/>
						</Link>
						<Link to='/lighting/Flood Light 6'>
							<Lighting_products
								img_url='/product_images/flood_light_6.png'
								text='Flood Light 6'
							/>
						</Link>
						<Link to='/lighting/Flood Light 7'>
							<Lighting_products
								img_url='/product_images/flood_light_7.png'
								text='Flood Light 7'
							/>
						</Link>
						<Link to='/lighting/Flood Light 8'>
							<Lighting_products
								img_url='/product_images/flood_light_8.png'
								text='Flood Light 8'
							/>
						</Link>
						<div>
							<h1 className='mt-8 font-semibold text-2xl josefin'>
								LUMINARY BLAZE FLOOD LIGHTS
							</h1>
							<div className='flex flex-wrap mt-4 gap-10'>

								<Link to='/lighting/Luminary Light 1'>
									<Lighting_products
										img_url='/product_images/LUMINARY BLAZE 1.png'
										text='Flood Light 1'
									/>
								</Link>
								<Link to='/lighting/Luminary Light 2'>
									<Lighting_products
										img_url='/product_images/LUMINARY BLAZE 2.png'
										text='Flood Light 2'
									/>
								</Link>
								<Link to='/lighting/Luminary Light 3'>
									<Lighting_products
										img_url='/product_images/LUMINARY BLAZE 3.png'
										text='Flood Light 3'
									/>
								</Link>
							</div>
							<div>
								<h1 className='mt-8 font-semibold text-2xl josefin'>
									LUMOMEET FLOOD LIGHTS
								</h1>
								<div className='flex flex-wrap mt-4 gap-10'>

									<Link to='/lighting/Lumomeet Lights 1'>
										<Lighting_products
											img_url='/product_images/LUMOMEET FLOOD 1.png'
											text='Flood Light 1'
										/>
									</Link>
									<Link to='/lighting/Lumomeet Lights 2'>
										<Lighting_products
											img_url='/product_images/LUMOMEET FLOOD 2.png'
											text='Flood Light 2'
										/>
									</Link>
									<Link to='/lighting/Lumomeet Lights 3'>
										<Lighting_products
											img_url='/product_images/LUMOMEET FLOOD 3.png'
											text='Flood Light 3'
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div
						onClick={() => {
							setIsFlood(!isFlood)
						}}
						className='flex justify-center items-center'>
						<button className='bg-black justify-center mt-4 items-center gap-2 flex px-5 py-3 rounded-xl jost text-lg text-white'>
							{isFlood ? 'See Less' : 'See More'}
							<img
								className={`h-5 invert transition-transform duration-300 ${isFlood ? 'rotate-180' : ''
									}`}
								src={down_arrow}
								alt='Toggle Icon'
							/>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Flood_Light_Series;
