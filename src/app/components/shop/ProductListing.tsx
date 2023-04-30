import React from 'react';
import ProductCard from '../home/ProductCard';
import Pagination from '../common/Pagination';

import { gql } from '@apollo/client';
import { getClient } from '@/app/apolloClient';

const GET_WINES_QUERsY = gql`
	query Wines($filter: WineFilterInput!) {
		wines(filter: $filter) {
			pageNo
			totalPages
			data {
				productId
				name
				rating
				# skus {
				# 	skuId
				# 	mrp
				# 	retailerIds {
				# 		userId
				# 		originalPrice
				# 	}
				# }
			}
		}
	}
`;

async function fetchWines() {
	try {
		const client = getClient();
		const { data } = await client.query({
			query: GET_WINES_QUERsY,
			variables: {
				filter: { name: 'DIKOSTA' },
			},
		});
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

const ProductListing = async () => {
	const data = await fetchWines();
	console.log('====================================');
	console.log(data);
	console.log('====================================');
	return (
		<>
			<h2>{data.wines?.data?.[0]?.name}</h2>
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
