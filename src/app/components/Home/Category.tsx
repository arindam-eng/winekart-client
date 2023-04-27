import Link from 'next/link';
import React from 'react';

const Category = () => {
	return (
		<div className='relative rounded-sm overflow-hidden group'>
			<img
				src='https://wallpapercave.com/wp/wp2878188.jpg'
				alt='category 1'
				className='w-full'
			/>
			<Link
				href='/shop?cat=123'
				className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'
			>
				Value Wine
			</Link>
		</div>
	);
};

export default Category;
