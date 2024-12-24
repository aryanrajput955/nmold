import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dynamic_Products = () => {
    const params = useParams();

    const [productPage, setProductPage] = useState([]);
    const [matchedProduct, setMatchedProduct] = useState({
        product_info: '',
        product_name: '',
        product_specification: '',
        product_summary: '',
        product_imageURL: '',
    });

	useEffect(() => {
		axios
			.get('https://nmold-api.vercel.app/product-info')
			.then((response) => {
				setProductPage(response.data)
				const prod = response.data.find((product) => {
					return product.product_name === params.id
				})
				// console.log()
				setMatchedProduct(prod)
			})
			.catch((err) => console.log(err))
	}, [])

	console.log(params.id)

	// console.log(matchedProduct.product_imageURL)

    return (
        <>
            <div className='flex flex-col lg:flex-row mt-20 justify-center px-4 lg:px-16'>
                {/* Product image */}
                <div
                    data-aos-offset='300'
                    data-aos='fade-right'
                    className='flex justify-center lg:justify-start'>
                    <img
                        className='w-[280px] lg:w-[560px] object-contain'
                        src={matchedProduct.product_imageURL}
                        alt={matchedProduct.product_name || "Product"}
                    />
                </div>
                {/* Specifications section 1 */}
                <div
                    data-aos='fade-left'
					data-aos-once='true'
                    data-aos-offset='400'
                    className='mt-10 lg:mt-0 lg:ml-14 flex-1'>
                    <h1 className='josefin text-2xl lg:text-4xl'>{matchedProduct.product_name}</h1>
                    <div className='flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-40 mt-4'>
                        <div>
                            <h1 className='josefin text-lg lg:text-xl custom_blue'>LIFETIME</h1>
                            <p className='jost text-base lg:text-xl'>{matchedProduct.product_life}</p>
                        </div>
                        <div>
                            <h1 className='josefin text-lg lg:text-xl custom_blue'>WATTAGE</h1>
                            <p className='jost text-base lg:text-xl'>21-56 Watts</p>
                        </div>
                    </div>
                    <div className='mt-4 divide-y-2 divide-blue-gray-500'>
                        {[...Array(6)].map((_, index) => (
                            <p key={index} className='text-base lg:text-xl pt-2 pb-2'>
                                {matchedProduct[`product_specification${index + 1}`]}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            {/* Summary section */}
            <div
                data-aos='zoom-in-down'
                data-aos-once='true'
                data-aos-offset='100'
                className='mx-4 lg:mx-72 mb-10'>
                <h1 className='text-3xl lg:text-5xl mt-10 josefin text-center'>Summary</h1>
                <p className='text-base lg:text-2xl text-center mt-5 jost'>{matchedProduct.product_summary}</p>
            </div>
        </>
    );
};

export default Dynamic_Products;
