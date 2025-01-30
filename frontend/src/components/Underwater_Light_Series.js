import React, { useState } from 'react'
import Lighting_products from './Lighting_products'
import down_arrow from '../images/down_arrow.png'
import { Link } from 'react-router-dom'

const Underwater_Light_Series = () => {
  const [isWall, setIsWall] = useState(false)

  return (
    <>
      <div className='ml-6 mb-20 w-full max-w-screen-xl'>
        <h1 className='josefin text-2xl font-semibold'>
          Underwater Light Series
        </h1>
        <div className='flex flex-wrap mt-4 gap-10 justify-center'>
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
        </div>

        {/* Animated Section */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden flex gap-10 mt-2 ${
            isWall ? 'max-h-[500px]' : 'max-h-0'
          }`}
        >
          <Link to='/lighting/Under Water 4'>
            <Lighting_products
              img_url='/product_images/under_water_3.png'
              text='Underwater Light 4'
            />
          </Link>
        </div>

        {/* Toggle Button */}
        <div
          onClick={() => setIsWall(!isWall)}
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
