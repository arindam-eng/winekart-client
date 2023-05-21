'use client';
import React from 'react';
import ProductCard from '../Home/ProductCard';
import Pagination from '../common/Pagination';
import { Sku } from '../wines/WineDetails';
import { useQuery } from '@apollo/client';
import { GET_WINES_QUERY } from '@/gql/wines/wines.gql';
import Loader from '../common/Loader';

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
	brand: any;
	category: any;
}

interface Props {
	data: Product[];
}

interface ProductListingProps {
	filter: any;
}

const ProductListing: React.FC<ProductListingProps> = ({ filter }) => {
	const { data, loading, error } = useQuery(GET_WINES_QUERY, {
		variables: { filter: filter || {} },
	});
	return (
		<>
			<div className='grid md:grid-cols-3 grid-cols-2 gap-6'>
				<Loader loading={loading} />
				{data?.wines?.data?.length > 0
					? data.wines.data.map((val: any, index: any) => {
							return <ProductCard key={index} product={val} />;
					  })
					: !loading && <h3>No Product found</h3>}
			</div>
			<hr className='mt-6' />
			<Pagination />
		</>
	);
};

export default ProductListing;
