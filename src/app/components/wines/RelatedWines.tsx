import React from 'react';
import ProductCard from '../Home/ProductCard';
import { Product } from '../shop/ProductListing';

interface Props {
	data: Product[];
}

const RelatedWines: React.FC<Props> = ({ data }) => {
	return (
		<div className='container pb-16'>
			{data?.length > 0 && (
				<>
					<h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>
						Related products
					</h2>
					<div className='grid grid-cols-4 gap-6'>
						{data?.length > 0 &&
							data.map((product, index) => {
								return <ProductCard key={index} product={product} />;
							})}
					</div>
				</>
			)}
		</div>
	);
};

export default RelatedWines;
