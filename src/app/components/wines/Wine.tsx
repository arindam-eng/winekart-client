'use client';
import React from 'react';
import WineDetails, { Sku } from './WineDetails';
import WineDescription from './WineDescription';
import { useQuery } from '@apollo/client';
import { GET_WINE_QUERY } from '@/services/wines/wines.gql';

interface Props {
	slug: string;
	skuId: string;
}

const Wine: React.FC<Props> = ({ slug, skuId }) => {
	const { data, loading, error } = useQuery(GET_WINE_QUERY, {
		variables: { slug },
	});
	const skuDetails: Sku =
		(data?.wine?.skus.find(
			(item: { skuId: any }) => item.skuId === skuId
		) as Sku) ||
		data?.wine?.skus.reduce(
			(prev: { price: number }, current: { price: number }) => {
				return prev.price < current.price ? prev : current;
			}
		);
	return (
		<>
			<WineDetails product={data?.wine} skuDetails={skuDetails} />
			<WineDescription product={data?.wine} skuDetails={skuDetails} />
		</>
	);
};

export default Wine;
