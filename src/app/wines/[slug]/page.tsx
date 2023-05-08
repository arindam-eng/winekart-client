import Breadcrumb from '@/app/components/common/Breadcrumb';
import RelatedWines from '@/app/components/wines/RelatedWines';
import WineDescription from '@/app/components/wines/WineDescription';
import WineDetails, { Sku } from '@/app/components/wines/WineDetails';
import { fetchWineBySlug, fetchWines } from '@/services/wines/wines.service';
import React from 'react';

interface PageProps {
	params: any;
	searchParams: any;
}

const ProductPage: React.FC<PageProps> = async ({ params, searchParams }) => {
	const slug = params.slug;
	const data = await fetchWineBySlug(slug);
	// TODO :: need to pass same brand id in filter, now same brand item not exist in DB
	const result = await fetchWines({ limit: '4' });
	const skuId = searchParams.skuId;
	const quantity = Number(searchParams.quantity) || 1;
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
			<Breadcrumb text='Product' />
			<WineDetails
				product={data?.wine}
				skuDetails={skuDetails}
				quantity={quantity}
			/>
			<WineDescription product={data?.wine} skuDetails={skuDetails} />
			<RelatedWines data={result?.wines?.data} />
		</>
	);
};

export default ProductPage;
