/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

interface PageProps {
	cat: {
		categoryId: string;
		categoryName: string;
		image: string | null;
	};
}

const Category: React.FC<PageProps> = ({ cat }) => {
	return (
		<div className='relative rounded-sm overflow-hidden group'>
			<img
				src={cat?.image || ''}
				alt={`category - ${cat.categoryName}`}
				className='w-full'
			/>
			<Link
				href={`/shop?cat=${cat.categoryId}`}
				className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'
			>
				{cat.categoryName}
			</Link>
		</div>
	);
};

export default Category;
