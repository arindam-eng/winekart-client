import React from 'react';
import Category from './Category';

const Categories = () => {
	return (
		<div className='container py-16'>
			<h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>
				shop by category
			</h2>
			<div className='grid grid-cols-3 gap-3'>
				<div className='relative rounded-sm overflow-hidden group'>
					<img
						src='https://wallpapercave.com/wp/wp2878164.jpg'
						alt='category 1'
						className='w-full'
					/>
					<a
						href='#'
						className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'
					>
						Red Wine
					</a>
				</div>
				<Category />
				<div className='relative rounded-sm overflow-hidden group'>
					<img
						src='https://wallpapercave.com/wp/wp2878167.jpg'
						alt='category 1'
						className='w-full'
					/>
					<a
						href='#'
						className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'
					>
						Cabernet Sauvignon
					</a>
				</div>
				<div className='relative rounded-sm overflow-hidden group'>
					<img
						src='https://wallpapercave.com/wp/wp2878159.jpg'
						alt='category 1'
						className='w-full'
					/>
					<a
						href='#'
						className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'
					>
						Classic Merlot
					</a>
				</div>
				<div className='relative rounded-sm overflow-hidden group'>
					<img
						src='https://wallpapercave.com/wp/wp2878157.jpg'
						alt='category 1'
						className='w-full'
					/>
					<a
						href='#'
						className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'
					>
						Gran Cuvee Brut
					</a>
				</div>
				<div className='relative rounded-sm overflow-hidden group'>
					<img
						src='https://wallpapercave.com/wp/wp2878153.jpg'
						alt='category 1'
						className='w-full'
					/>
					<a
						href='#'
						className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'
					>
						Chenin Blanc
					</a>
				</div>
			</div>
		</div>
	);
};

export default Categories;
