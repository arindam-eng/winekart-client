import Breadcrumb from '@/app/components/common/Breadcrumb';
import RelatedWines from '@/app/components/wines/RelatedWines';
import WineDescription from '@/app/components/wines/WineDescription';
import WineDetails from '@/app/components/wines/WineDetails';
import { fetchWineBySlug, fetchWines } from '@/services/wines/wines.service';
import React from 'react';

interface PageProps {
	params: any;
}

const ProductPage: React.FC<PageProps> = async ({ params }) => {
	const slug = params.slug;
	const data = await fetchWineBySlug(slug);
	// TODO :: need to pass same brand id in filter, now same brand item not exist in DB
	const result = await fetchWines({ limit: '4' });
	// TODO: handle sku in server components
	const selectedSku = data?.wine?.skus[0];

	return (
		<>
			<Breadcrumb text='Product' />
			<WineDetails product={data?.wine} />
			<WineDescription product={data?.wine} />
			<RelatedWines data={result?.wines?.data} />
		</>
	);
};

export default ProductPage;
