import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import Sidebar from '../components/shop/Sidebar';
import SortingHeader from '../components/shop/SortingHeader';
import ProductListing from '../components/shop/ProductListing';

const Shop = () => {
	return (
		<>
			<Breadcrumb text='Shop' />
			<div className='container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start'>
				<Sidebar />
				<div className='col-span-3'>
					<SortingHeader />
					<ProductListing />
				</div>
			</div>
		</>
	);
};

export default Shop;
