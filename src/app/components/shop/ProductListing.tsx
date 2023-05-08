import React from 'react';
import ProductCard from '../Home/ProductCard';
import Pagination from '../common/Pagination';
import { Sku } from '../wines/WineDetails';

export interface Product {
	id: number;
	name: string;
	price: number;
	image: string;
	slug: string;
	mrp: number;
	rating: number;
	description: string;
	vintage: string;
	producer: string;
	reviewsCount: number;
	outOfStock: boolean;
	highlightDescription: string;
	skus: Sku[];
}

interface Props {
	data: Product[];
}

const ProductListing: React.FC<Props> = ({ data }) => {
	return (
		<>
			<div className='grid md:grid-cols-3 grid-cols-2 gap-6'>
				{data?.length > 0 ? (
					data.map((val, index) => {
						return <ProductCard key={index} product={val} />;
					})
				) : (
					<h3>No Product found</h3>
				)}
			</div>
			<hr className='mt-6' />
			<Pagination />
		</>
	);
};

export default ProductListing;
