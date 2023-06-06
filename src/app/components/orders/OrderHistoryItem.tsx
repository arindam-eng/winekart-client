/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface PageProps {
	order: Record<string, any>;
	setOpen: any;
	setOrder: any;
}

const OrderHistoryItem: React.FC<PageProps> = ({
	order,
	setOpen,
	setOrder,
}) => {
	return (
		<div className='flex items-center justify-between border gap-6 p-4 border-gray-200 rounded'>
			<div className='w-28'>
				<img
					src={order?.items?.[0]?.image}
					alt='product 6'
					className='w-full'
				/>
			</div>
			<div className='w-1/3'>
				<h2 className='text-gray-800 text-xl font-medium uppercase'>
					{order?.orderId?.slice(-10)}
				</h2>
				{order?.shippingAddress && (
					<p className='text-gray-500 text-sm'>
						Shipping address:{' '}
						<span className='text-green-600'>
							{order?.shippingAddress?.line_1}
						</span>
					</p>
				)}
				{order?.billingAddress && (
					<p className='text-gray-500 text-sm'>
						Billing address:{' '}
						<span className='text-green-600'>
							{order?.billingAddress?.line_1}
						</span>
					</p>
				)}
			</div>
			<div className='text-primary text-lg font-semibold'>
				${order?.costDetails?.grossAmount}
			</div>
			<a
				href='#'
				className='px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium'
				onClick={(e) => {
					e.preventDefault();
					setOrder(order);
					setOpen(true);
				}}
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
