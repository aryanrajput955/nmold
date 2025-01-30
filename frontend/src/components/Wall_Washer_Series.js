import React, { useState } from 'react'
import Lighting_products from './Lighting_products'
import down_arrow from '../images/down_arrow.png'
import { Link } from 'react-router-dom'

const Wall_Washer_Series = () => {
  const [isWall, setIsWall] = useState(false)

  return (
    <>
      <div className='ml-6 mb-20 w-full max-w-screen-xl'>
        <h1 className='josefin text-3xl font-bold'>WALL WASHER SERIES</h1>

        <div className='mt-8'>
          <h1 className='font-semibold text-2xl josefin'>
            WALLWASHERS LINEAR LIGHTS
          </h1>
          <div className='flex flex-wrap mt-4 gap-10 justify-center'>
            <Link to='/lighting/Wall Washer 1'>
              <Lighting_products img_url='/product_images/wall_washer_1.png' text='Wall Washer 1' />
            </Link>
            <Link to='/lighting/Wall Washer 2'>
              <Lighting_products img_url='/product_images/wall_washer_2.png' text='Wall Washer 2' />
            </Link>
            <Link to='/lighting/Wall Washer 3'>
              <Lighting_products img_url='/product_images/wall_washer_3.png' text='Wall Washer 3' />
            </Link>
          </div>
        </div>

        <div
          className={`transition-all ease-linear duration-300 flex gap-10 overflow-hidden flex-wrap mt-2 ${isWall ? 'h-auto' : 'h-0'}`}
        >
          <Link to='/lighting/Wall Washer 4'>
            <Lighting_products img_url='/product_images/wall_washer_4.png' text='Wall Washer 4' />
          </Link>
          <div className='w-full'>
            <h1 className='mt-8 font-semibold text-2xl josefin'>
              INGROUND WALLWASHERS LIGHTS
            </h1>
            <div className='flex flex-wrap mt-4 gap-10 justify-center'>
              <Link to='/lighting/Inground Wallwasher 1'>
                <Lighting_products img_url='/product_images/inground_wallwasher_lights.png' text='Inground Wall Washer 1' />
              </Link>
              <Link to='/lighting/Inground Wallwasher 2'>
                <Lighting_products img_url='/product_images/inground_wallwasher_lights 2.png' text='Wall Washer 2' />
              </Link>
              <Link to='/lighting/Inground Wallwasher 3'>
                <Lighting_products img_url='/product_images/inground_wallwasher_lights 3.png' text='Wall Washer 3' />
              </Link>
            </div>
          </div>
        </div>

        <div
          onClick={() => setIsWall(!isWall)}
          className='flex justify-center items-center'>
          <button className='bg-black justify-center mt-4 items-center gap-2 flex px-5 py-3 rounded-xl jost text-lg text-white'>
            {isWall ? 'See Less' : 'See More'}
            <img
              className={`h-5 invert transition-transform duration-300 ${isWall ? 'rotate-180' : ''}`}
              src={down_arrow}
              alt='Toggle Icon'
            />
          </button>
        </div>
      </div>
    </>
  )
}

export default Wall_Washer_Series;
