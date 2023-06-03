/* eslint-disable @next/next/no-img-element */
'use client';
import { GET_WINES_QUERY } from '@/gql/wines/wines.gql';
import { useQuery } from '@apollo/client';
import React from 'react';
import { Product } from '../shop/ProductListing';
import ProductCard from './ProductCard';
import Loader from '../common/Loader';
import { toast } from 'react-toastify';

const NewArrival = () => {
	const { data, loading, error } = useQuery(GET_WINES_QUERY, {
		variables: { filter: { limit: '4', sort: '-createdAt' } },
	});
	if (error) {
		toast.error(error.message);
	}
	return (
		<div className='container pb-16'>
			<h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>
				top new arrival
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
				<Loader loading={loading} />
				{data?.wines?.data?.length > 0 &&
					data?.wines?.data.map(
						(product: Product, index: React.Key | null | undefined) => {
							return <ProductCard key={index} product={product} />;
						}
					)}
			</div>
		</div>
	);
};

export default NewArrival;
