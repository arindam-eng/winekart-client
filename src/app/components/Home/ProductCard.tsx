import Link from 'next/link';
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
					<Link
						href='/wines/123'
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
								fillRule='evenodd'
								d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z'
								clip-rule='evenodd'
							/>
						</svg>
					</Link>
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
				<Link href='wines/123'>
					<h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
						Red King M
					</h4>
				</Link>
				<div className='flex items-baseline mb-1 space-x-2'>
					<p className='text-xl text-primary font-semibold'>$45.00</p>
					<p className='text-sm text-gray-400 line-through'>$55.90</p>
				</div>
				<div className='flex items-center'>
					<div className='flex gap-1 text-sm text-yellow-400'>
						{Array.from({ length: 4 }, (_, index) => index + 1).map(
							(val, index) => {
								return (
									<span key={index}>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill='currentColor'
											className='w-6 h-6'
										>
											<path
												fillRule='evenodd'
												d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
												clipRule='evenodd'
											/>
										</svg>
									</span>
								);
							}
						)}
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
