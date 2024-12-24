import React, {useState} from 'react'
import Lighting_products from './Lighting_products'
import bulb1 from '../images/bulb.png'
import bulb2 from '../images/bulb2.png'
import down_arrow from '../images/down_arrow.png'
import {Link} from 'react-router-dom'

const Underwater_Light_Series = () => {
	const [isWall, setIsWall] = useState(false)

	return (
		<>
			<div className='ml-6 mb-20 w-[800px]'>
				<h1 className='josefin text-2xl font-semibold'>
					Underwater Light Series
				</h1>
				<div className='flex flex-wrap mt-4 gap-10'>
					<Link to='/lighting/Under Water 1'>
						<Lighting_products
							img_url='/product_images/under_water_1.png'
							text='Underwater Light 1'
						/>
					</Link>
					<Link to='/lighting/Under Water 2'>
						<Lighting_products
							img_url='/product_images/under_water_2.png'
							text='Underwater Light 2'
						/>
					</Link>
					<Link to='/lighting/Under Water 3'>
						<Lighting_products
							img_url='/product_images/under_water_3.png'
							text='Underwater Light 3'
						/>
					</Link>
					
					<div
						className={`transition-all ease-linear duration-300 flex gap-10 overflow-hidden flex-wrap mt-2 ${
							isWall ? 'h-[18rem]' : 'h-0'
						}`}>
						<Link to='/lighting/Under Water 4'>
						<Lighting_products
							img_url='/product_images/under_water_3.png'
							text='Underwater Light 3'
						/>
					</Link>
					</div>
				</div>
				<div
					onClick={() => {
						setIsWall(!isWall)
					}}
					className='flex justify-center items-center'>
					<button className='bg-black justify-center mt-4 items-center gap-2 flex px-5 py-3 rounded-xl jost text-lg text-white'>
						{isWall ? 'See Less' : 'See More'}
						<img
							className={`h-5 invert transition-transform duration-300 ${
								isWall ? 'rotate-180' : ''
							}`}
							src={down_arrow}
							alt='Toggle Icon'
						/>
					</button>
				</div>
			</div>
		</>
	)
}

export default Underwater_Light_Series
