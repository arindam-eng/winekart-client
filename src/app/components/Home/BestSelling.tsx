/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ProductCard from './ProductCard';

const BestSelling = () => {
	return (
		<div className='container pb-16'>
			<h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>
				best selling
			</h2>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
				<div className='bg-white shadow rounded overflow-hidden group'>
					<div className='relative'>
						<img
							src='https://yi-files.s3.eu-west-1.amazonaws.com/products/642000/642180/1112676-cover.jpg'
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
								<i className='fa-solid fa-magnifying-glass'></i>
							</a>
							<a
								href='#'
								className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
								title='add to wishlist'
							>
								<i className='fa-solid fa-heart'></i>
							</a>
						</div>
					</div>
					<div className='pt-4 pb-3 px-4'>
						<a href='#'>
							<h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
								DemonTist
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

				{/* <ProductCard product={} /> */}

				<div className='bg-white shadow rounded overflow-hidden group'>
					<div className='relative'>
						<img
							src='https://yi-files.s3.eu-west-1.amazonaws.com/products/650000/650698/1127164-cover.jpg'
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
								<i className='fa-solid fa-magnifying-glass'></i>
							</a>
							<a
								href='#'
								className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
								title='add to wishlist'
							>
								<i className='fa-solid fa-heart'></i>
							</a>
						</div>
					</div>
					<div className='pt-4 pb-3 px-4'>
						<a href='#'>
							<h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
								MoSofa X
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
				<div className='bg-white shadow rounded overflow-hidden group'>
					<div className='relative'>
						<img
							src='https://s3-eu-west-1.amazonaws.com/yi-files/content/2018/04/5ae1f1792ac04.jpg'
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
								<i className='fa-solid fa-magnifying-glass'></i>
							</a>
							<a
								href='#'
								className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
								title='add to wishlist'
							>
								<i className='fa-solid fa-heart'></i>
							</a>
						</div>
					</div>
					<div className='pt-4 pb-3 px-4'>
						<a href='#'>
							<h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
								Mattrass XNon
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
				<div className='bg-white shadow rounded overflow-hidden group'>
					<div className='relative'>
						<img
							src='https://yi-files.s3.eu-west-1.amazonaws.com/products/640000/640026/1111031-cover.jpg'
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
								<i className='fa-solid fa-magnifying-glass'></i>
							</a>
							<a
								href='#'
								className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
								title='add to wishlist'
							>
								<i className='fa-solid fa-heart'></i>
							</a>
						</div>
					</div>
					<div className='pt-4 pb-3 px-4'>
						<a href='#'>
							<h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
								Guyer Demon
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
				<div className='bg-white shadow rounded overflow-hidden group'>
					<div className='relative'>
						<img
							src='https://yi-files.s3.amazonaws.com/products/47000/47718/47720-cover.jpg'
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
								<i className='fa-solid fa-magnifying-glass'></i>
							</a>
							<a
								href='#'
								className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
								title='add to wishlist'
							>
								<i className='fa-solid fa-heart'></i>
							</a>
						</div>
					</div>
					<div className='pt-4 pb-3 px-4'>
						<a href='#'>
							<h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
								King Sher
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
				<div className='bg-white shadow rounded overflow-hidden group'>
					<div className='relative'>
						<img
							src='https://yi-files.s3.amazonaws.com/products/32000/32005/32007-cover.jpg'
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
								<i className='fa-solid fa-magnifying-glass'></i>
							</a>
							<a
								href='#'
								className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
								title='add to wishlist'
							>
								<i className='fa-solid fa-heart'></i>
							</a>
						</div>
					</div>
					<div className='pt-4 pb-3 px-4'>
						<a href='#'>
							<h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
								Coupli Wine
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
				<div className='bg-white shadow rounded overflow-hidden group'>
					<div className='relative'>
						<img
							src='https://yi-files.s3.amazonaws.com/products/24000/24394/24402-cover.jpg'
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
								<i className='fa-solid fa-magnifying-glass'></i>
							</a>
							<a
								href='#'
								className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
								title='add to wishlist'
							>
								<i className='fa-solid fa-heart'></i>
							</a>
						</div>
					</div>
					<div className='pt-4 pb-3 px-4'>
						<a href='#'>
							<h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
								Mattrass X Wine
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
			</div>
		</div>
	);
};

export default BestSelling;
