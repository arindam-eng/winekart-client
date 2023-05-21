import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import Sidebar from '../components/shop/Sidebar';
import SortingHeader from '../components/shop/SortingHeader';
import ProductListing from '../components/shop/ProductListing';
import { NextPage } from 'next';

interface PageProps {
	searchParams: any;
}

const Shop: NextPage<PageProps> = ({ searchParams }) => {
	return (
		<>
			<Breadcrumb text='Shop' />
			<div className='container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start'>
				<Sidebar query={searchParams} />
				<div className='col-span-3'>
					<SortingHeader filter={searchParams} />
					<ProductListing filter={searchParams} />
				</div>
			</div>
		</>
	);
};

export default Shop;
