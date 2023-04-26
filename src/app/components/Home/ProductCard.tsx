import React from 'react';

const ProductCard = () => {
	return (
		<div className='bg-white shadow rounded overflow-hidden group'>
			<div className='relative'>
				<img
					src='https://yi-files.s3.eu-west-1.amazonaws.com/products/650000/650805/1130930-cover.jpg'
					alt='product 1'
					className='w-full'
				/>
				<div
					className='absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition'
				>
					<a
						href='#'
						className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
						title='view product'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-6 h-6'
						>
							<path d='M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z' />
							<path
								fill-rule='evenodd'
								d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z'
								clip-rule='evenodd'
							/>
						</svg>
					</a>
					<a
						href='#'
						className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
						title='add to wishlist'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-6 h-6'
						>
							<path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
						</svg>
					</a>
				</div>
			</div>
			<div className='pt-4 pb-3 px-4'>
				<a href='#'>
					<h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
						Red King M
					</h4>
				</a>
				<div className='flex items-baseline mb-1 space-x-2'>
					<p className='text-xl text-primary font-semibold'>$45.00</p>
					<p className='text-sm text-gray-400 line-through'>$55.90</p>
				</div>
				<div className='flex items-center'>
					<div className='flex gap-1 text-sm text-yellow-400'>
						<span>
							<i className='fa-solid fa-star'></i>
						</span>
						<span>
							<i className='fa-solid fa-star'></i>
						</span>
						<span>
							<i className='fa-solid fa-star'></i>
						</span>
						<span>
							<i className='fa-solid fa-star'></i>
						</span>
						<span>
							<i className='fa-solid fa-star'></i>
						</span>
					</div>
				</div>
			</div>
			<a
				href='#'
				className='block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'
			>
				Add to cart
			</a>
		</div>
	);
};

export default ProductCard;
