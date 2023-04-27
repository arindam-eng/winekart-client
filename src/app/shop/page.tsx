import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import Sidebar from '../components/shop/Sidebar';
import SortingHeader from '../components/shop/SortingHeader';
import Pagination from '../components/common/Pagination';
import ProductCard from '../components/Home/ProductCard';

const Shop = () => {
	return (
		<>
			<Breadcrumb text='Shop' />
			<div className='container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start'>
				<Sidebar />
				<div className='col-span-3'>
					<SortingHeader />
					<div className='grid md:grid-cols-3 grid-cols-2 gap-6'>
						{Array.from({ length: 18 }, (_, index) => index + 1).map(
							(val, index) => {
								return <ProductCard key={index} />;
							}
						)}
					</div>
					<hr className='mt-6' />
					<Pagination />
				</div>
			</div>
		</>
	);
};

export default Shop;
