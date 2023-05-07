import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import Sidebar from '../components/shop/Sidebar';
import SortingHeader from '../components/shop/SortingHeader';
import ProductListing from '../components/shop/ProductListing';

import { gql } from '@apollo/client';
import { getClient } from '@/app/apolloClient';

const GET_WINES_QUERY = gql`
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
			query: GET_WINES_QUERY,
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

const Shop = async () => {
	const data = await fetchWines();
	return (
		<>
			<Breadcrumb text='Shop' />
			<div className='container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start'>
				<Sidebar />
				<div className='col-span-3'>
					<SortingHeader />
					<ProductListing data={data.wines?.data || []} />
				</div>
			</div>
		</>
	);
};

export default Shop;
