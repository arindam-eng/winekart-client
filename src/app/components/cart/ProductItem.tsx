/* eslint-disable @next/next/no-img-element */
import React from 'react';
import slugify from 'slugify';

type ProductItemProps = {
	product: {
		id: number;
		name: string;
		quantity: number;
		image: string;
		sku: {
			skuId: string;
			size: string;
			color: string;
			mrp: number;
			price: number;
		};
	};
	cart: boolean;
	setItems?: any;
	addItemToCart?: any;
};

const ProductItem = ({
	product,
	cart,
	setItems,
	addItemToCart,
}: ProductItemProps) => {
	const removeItem = () => {}
	return (
		<li key={product?.id} className='flex py-6'>
			<div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
				<img
					src={product?.image}
					alt={product?.name}
					className='h-full w-full object-cover object-center'
				/>
			</div>

			<div className='ml-4 flex flex-1 flex-col'>
				<div>
					<div className='flex justify-between text-base font-medium text-gray-900'>
						<h3>
							<a href='#'>{product?.name}</a>
						</h3>
						<p className='ml-4'>${product?.sku?.price}</p>
					</div>
					<p className='mt-1 text-sm text-gray-500'>{product?.sku?.size}</p>
					<p className='mt-1 text-sm text-gray-500'>{product?.sku?.color}</p>
				</div>
				<div className='flex flex-1 items-end justify-between text-sm'>
					<p className='text-gray-500'>Qty {product?.quantity}</p>
					{cart && (
						<div className='flex'>
							<button
								type='button'
								className='font-medium text-indigo-600 hover:text-indigo-500'
							>
								Remove
							</button>
						</div>
					)}
				</div>
			</div>
		</li>
	);
};

export default ProductItem;
