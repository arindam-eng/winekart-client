import Breadcrumb from '@/app/components/common/Breadcrumb';
import RelatedWines from '@/app/components/wines/RelatedWines';
import Wine from '@/app/components/wines/Wine';
import React from 'react';

interface PageProps {
	params: any;
	searchParams: any;
}

const ProductPage: React.FC<PageProps> = ({ params, searchParams }) => {
	const slug = params.slug;
	const skuId = searchParams.skuId;

	// TODO :: need to pass same brand id in filter, now same brand item not exist in DB

	return (
		<>
			<Breadcrumb text='Product' />
			<Wine slug={slug} skuId={skuId} />
			<RelatedWines />
		</>
	);
};

export default ProductPage;
