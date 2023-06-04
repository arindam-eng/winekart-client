/* eslint-disable @next/next/no-img-element */
import React from 'react';

const OrderHistoryItem = () => {
	return (
		<div className='flex items-center justify-between border gap-6 p-4 border-gray-200 rounded'>
			<div className='w-28'>
				<img
					src='https://static4.depositphotos.com/1001911/383/v/600/depositphotos_3831390-stock-illustration-drinking-buddies.jpg'
					alt='product 6'
					className='w-full'
				/>
			</div>
			<div className='w-1/3'>
				<h2 className='text-gray-800 text-xl font-medium uppercase'>
					1654841451
				</h2>
				<p className='text-gray-500 text-sm'>
					Shipping address: <span className='text-green-600'>Red | 500ml</span>
				</p>
				<p className='text-gray-500 text-sm'>
					Billing address: <span className='text-green-600'>Red | 500ml</span>
				</p>
			</div>
			<div className='text-primary text-lg font-semibold'>$320.00</div>
			<a
				href='#'
				className='px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium'
			>
				View Details
			</a>

			{/* <div className='text-gray-600 cursor-pointer hover:text-primary'>
				<i className='fa-solid fa-trash'></i>
			</div> */}
		</div>
	);
};

export default OrderHistoryItem;
