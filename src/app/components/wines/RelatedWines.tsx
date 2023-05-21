'use client';
import React from 'react';
import ProductCard from '../Home/ProductCard';
import { Product } from '../shop/ProductListing';
import { useQuery } from '@apollo/client';
import { GET_WINES_QUERY } from '@/gql/wines/wines.gql';

const RelatedWines = () => {
	const { data, loading, error } = useQuery(GET_WINES_QUERY, {
		variables: { filter: { limit: '4' } },
	});
	console.log('=========data===========================');
	console.log(data);
	console.log('====================================');
	return (
		<div className='container pb-16'>
			{data?.wines?.data?.length > 0 && (
				<>
					<h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>
						Related products
					</h2>
					<div className='grid grid-cols-4 gap-6'>
						{data?.wines?.data?.length > 0 &&
							data?.wines?.data.map(
								(product: Product, index: React.Key | null | undefined) => {
									return <ProductCard key={index} product={product} />;
								}
							)}
					</div>
				</>
			)}
		</div>
	);
};

export default RelatedWines;
