/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { GET_WINE_BRAND_QUERY } from '@/gql/wines/wine-brand.gql';
import { GET_WINE_CAT_QUERY } from '@/gql/wines/wine-category.gql';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface SidebarProps {
	query: any;
}

const Sidebar: React.FC<SidebarProps> = ({ query }) => {
	const {
		data: catData,
		loading: catLoading,
		error: catErr,
	} = useQuery(GET_WINE_CAT_QUERY);
	if (catErr) {
		toast.error(catErr.message);
	}

	const {
		data: brandData,
		loading: brandLoading,
		error: brandErr,
	} = useQuery(GET_WINE_BRAND_QUERY);
	if (brandErr) {
		toast.error(brandErr.message);
	}

	const [price, setPrice] = useState({
		minPrice: 0,
		maxPrice: 50000,
	});

	const [filter, setFilter] = useState(query);

	const handlePriceFilter = (e: any) => {
		e.preventDefault();
		const { minPrice, maxPrice } = price;

		let queryParams = '';
		if (minPrice) {
			queryParams += `minPrice=${minPrice}`;
		}
		if (maxPrice) {
			queryParams += `${queryParams ? '&' : ''}maxPrice=${maxPrice}`;
		}

		router.push(`/shop${queryParams ? `?${queryParams}` : ''}`);
	};

	// TODO: Need to give the filter functionality includes price

	console.log(filter);

	const router = useRouter();
	return (
		<div className='col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block'>
			<div className='divide-y divide-gray-200 space-y-5'>
				<div>
					<h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>
						Categories
					</h3>
					<div className='space-y-2'>
						{catData?.categories?.length > 0 &&
							catData.categories.map((cat: any) => (
								<div className='flex items-center' key={cat.categoryId}>
									<input
										type='checkbox'
										name={cat.categoryName}
										id={cat.categoryId}
										className='text-primary focus:ring-0 rounded-sm cursor-pointer'
									/>
									<label
										htmlFor={cat.categoryId}
										className='text-gray-600 ml-3 cusror-pointer'
									>
										{cat.categoryName}
									</label>
									{/* <div className='ml-auto text-gray-600 text-sm'>(9)</div> */}
								</div>
							))}
					</div>
				</div>

				<div className='pt-4'>
					<h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>
						Brands
					</h3>
					<div className='space-y-2'>
						{brandData?.brands?.length > 0 &&
							brandData.brands.map((brand: any) => (
								<div className='flex items-center' key={brand.brandId}>
									<input
										type='checkbox'
										name={brand.brandName}
										id={brand.brandId}
										className='text-primary focus:ring-0 rounded-sm cursor-pointer'
									/>
									<label
										htmlFor={brand.brandId}
										className='text-gray-600 ml-3 cusror-pointer'
									>
										{brand.brandName}
									</label>
									{/* <div className='ml-auto text-gray-600 text-sm'>(15)</div> */}
								</div>
							))}
					</div>
				</div>

				<div className='pt-4'>
					<h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>
						Price
					</h3>
					<div className='mt-4 flex items-center'>
						<input
							type='text'
							name='min'
							id='min'
							value={filter?.minPrice || 0}
							className='w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm'
							placeholder='min'
							onChange={(e) =>
								setFilter({ ...filter, minPrice: Number(e.target.value) })
							}
						/>
						<span className='mx-3 text-gray-500'>-</span>
						<input
							type='text'
							name='max'
							id='max'
							value={filter?.maxPrice || 50000}
							className='w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm'
							placeholder='max'
							onChange={(e) =>
								setFilter({ ...filter, maxPrice: Number(e.target.value) })
							}
						/>
						<button
							style={{ border: '1px solid gray' }}
							className='ml-2 hover:text-primary rounded px-3 py-1 text-gray-600 shadow-sm transition duration-200'
							onClick={handlePriceFilter}
						>
							Go
						</button>
					</div>
				</div>

				<div className='pt-4'>
					<h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>
						size
					</h3>
					<div className='flex items-center gap-2'>
						<div className='size-selector'>
							<input type='radio' name='size' id='size-xs' className='hidden' />
							<label
								htmlFor='size-xs'
								className='text-xs border border-gray-200 rounded-sm h-6 w-10 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'
							>
								250ml
							</label>
						</div>
						<div className='size-selector'>
							<input type='radio' name='size' id='size-sm' className='hidden' />
							<label
								htmlFor='size-sm'
								className='text-xs border border-gray-200 rounded-sm h-6 w-10 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'
							>
								500ml
							</label>
						</div>
						<div className='size-selector'>
							<input type='radio' name='size' id='size-m' className='hidden' />
							<label
								htmlFor='size-m'
								className='text-xs border border-gray-200 rounded-sm h-6 w-10 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'
							>
								1L
							</label>
						</div>
						<div className='size-selector'>
							<input type='radio' name='size' id='size-l' className='hidden' />
							<label
								htmlFor='size-l'
								className='text-xs border border-gray-200 rounded-sm h-6 w-10 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'
							>
								1.25L
							</label>
						</div>
						<div className='size-selector'>
							<input type='radio' name='size' id='size-xl' className='hidden' />
							<label
								htmlFor='size-xl'
								className='text-xs border border-gray-200 rounded-sm h-6 w-9 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'
							>
								1.5L
							</label>
						</div>
					</div>
				</div>

				{/* <div className='pt-4'>
					<h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>
						Color
					</h3>
					<div className='flex items-center gap-2'>
						<div className='color-selector'>
							<input type='radio' name='color' id='red' className='hidden' />
							<label
								htmlFor='red'
								className='border border-gray-200 rounded-sm h-6 w-10 cursor-pointer shadow-sm block'
								style={{ backgroundColor: '#fc3d57' }}
							></label>
						</div>
						<div className='color-selector'>
							<input type='radio' name='color' id='black' className='hidden' />
							<label
								htmlFor='black'
								className='border border-gray-200 rounded-sm h-6 w-10 cursor-pointer shadow-sm block'
								style={{ backgroundColor: '#000' }}
							></label>
						</div>
						<div className='color-selector'>
							<input type='radio' name='color' id='white' className='hidden' />
							<label
								htmlFor='white'
								className='border border-gray-200 rounded-sm h-6 w-10 cursor-pointer shadow-sm block'
								style={{ backgroundColor: '#fff' }}
							></label>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Sidebar;
