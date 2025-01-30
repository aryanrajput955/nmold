import React, { useState } from 'react'
import Lighting_products from './Lighting_products'
import down_arrow from '../images/down_arrow.png'
import { Link } from 'react-router-dom'

const Tree_Light_Series = () => {
  const [isWall, setIsWall] = useState(false)

  return (
    <>
      <div className='ml-6 mb-20 w-full max-w-screen-xl px-4'>
        <h1 className='josefin text-2xl font-semibold'>Tree Light Series</h1>
        <div className='flex flex-wrap mt-4 gap-10 justify-center'>
          <Link to='/lighting/Tree Light 1'>
            <Lighting_products
              img_url='/product_images/tree_light_1.png'
              text='Tree Light 1'
            />
          </Link>
          <Link to='/lighting/Tree Light 2'>
            <Lighting_products
              img_url='/product_images/tree_light_2.png'
              text='Tree Light 2'
            />
          </Link>
          <Link to='/lighting/Tree Light 3'>
            <Lighting_products
              img_url='/product_images/tree_light_3.png'
              text='Tree Light 3'
            />
          </Link>
        </div>

        <div
          className={`transition-all ease-linear duration-300 flex gap-10 overflow-hidden flex-wrap mt-2 ${
            isWall ? 'h-auto' : 'h-0'
          }`}
        >
          <Link to='/lighting/Tree Light 4'>
            <Lighting_products
              img_url='/product_images/tree_light_4.png'
              text='Tree Light 4'
            />
          </Link>
        </div>

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

export default Tree_Light_Series
