import Breadcrumb from '@/app/components/common/Breadcrumb';
import RelatedWines from '@/app/components/wines/RelatedWines';
import WineDescription from '@/app/components/wines/WineDescription';
import WineDetails from '@/app/components/wines/WineDetails';
import React from 'react';

const ProductPage = () => {
	return (
		<>
			<Breadcrumb text='Product' />
			<WineDetails />
			<WineDescription />
			<RelatedWines />
		</>
	);
};

export default ProductPage;
