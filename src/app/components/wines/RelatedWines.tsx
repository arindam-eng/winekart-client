import React from 'react';
import ProductCard from '../Home/ProductCard';

const RelatedWines = () => {
	return (
		<div className='container pb-16'>
			<h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>
				Related products
			</h2>
			<div className='grid grid-cols-4 gap-6'>
				{Array.from({ length: 4 }, (_, index) => index + 1).map(
					(val, index) => {
						return <ProductCard key={index} />;
					}
				)}
			</div>
		</div>
	);
};

export default RelatedWines;
