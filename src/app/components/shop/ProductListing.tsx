import React from 'react';
import ProductCard from '../Home/ProductCard';
import Pagination from '../common/Pagination';

interface Product {
	id: number;
	name: string;
	price: number;
}

interface Props {
	data: Product[];
}

const ProductListing: React.FC<Props> = ({ data }) => {
	return (
		<>
			<h2>{data?.[0]?.name}</h2>
			<div className='grid md:grid-cols-3 grid-cols-2 gap-6'>
				{Array.from({ length: 18 }, (_, index) => index + 1).map(
					(val, index) => {
						return <ProductCard key={index} />;
					}
				)}
			</div>
			<hr className='mt-6' />
			<Pagination />
		</>
	);
};

export default ProductListing;
