/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { GET_WINE_BRAND_QUERY } from '@/gql/wines/wine-brand.gql';
import { GET_WINE_CAT_QUERY } from '@/gql/wines/wine-category.gql';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
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

	const [filter, setFilter] = useState(query);

	useEffect(() => {
		const decodedObject = query?.filterQuery
			? JSON.parse(query.filterQuery)
			: {};
		setFilter(decodedObject);
	}, [query]);

	const handleSizeChange = (e: any) => {
		e.preventDefault();
		refetchByFilter({
			...filter,
			sku: { ...(filter?.sku || {}), size: e.target.value },
		});
	};

	const handleColorChange = (e: any) => {
		e.preventDefault();
		refetchByFilter({
			...filter,
			sku: { ...(filter?.sku || {}), color: e.target.value },
		});
	};

	const refetchByFilter = (value?: any) => {
		const filterQuery = value || filter;
		router.push(
			`/shop?filterQuery=${encodeURIComponent(JSON.stringify(filterQuery))}`
		);
	};

	const handleBrand = (e: any, brandId: string) => {
		if (e.target.checked) {
			refetchByFilter({
				...filter,
				brandIds: [...(filter.brandIds || []), brandId],
			});
		} else {
			const brandIds = filter.brandIds.filter((id: any) => id !== brandId);
			refetchByFilter({
				...filter,
				brandIds: brandIds,
			});
		}
	};

	const handleCat = (e: any, categoryId: string) => {
		if (e.target.checked) {
			refetchByFilter({
				...filter,
				catIds: [...(filter.catIds || []), categoryId],
			});
		} else {
			const catIds = filter.catIds.filter((id: any) => id !== categoryId);
			refetchByFilter({
				...filter,
				catIds: catIds,
			});
		}
	};

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
										checked={filter.catIds?.includes(cat.categoryId)}
										onChange={(e) => handleCat(e, cat.categoryId)}
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
										checked={filter.brandIds?.includes(brand.brandId)}
										className='text-primary focus:ring-0 rounded-sm cursor-pointer'
										onChange={(e: any) => handleBrand(e, brand.brandId)}
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
							value={filter?.minPrice}
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
							value={filter?.maxPrice}
							className='w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm'
							placeholder='max'
							onChange={(e) =>
								setFilter({ ...filter, maxPrice: Number(e.target.value) })
							}
						/>
						<button
							style={{ border: '1px solid gray' }}
							className='ml-2 hover:text-primary rounded px-3 py-1 text-gray-600 shadow-sm transition duration-200'
							onClick={refetchByFilter}
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
							<input
								type='radio'
								name='size'
								id='size-xs'
								className='hidden'
								onChange={handleSizeChange}
								value={'250ml'}
								checked={filter?.sku?.size === '250ml'}
							/>
							<label
								htmlFor='size-xs'
								className='text-xs border border-gray-200 rounded-sm h-6 w-10 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'
							>
								250ml
							</label>
						</div>
						<div className='size-selector'>
							<input
								type='radio'
								name='size'
								id='size-sm'
								className='hidden'
								onChange={handleSizeChange}
								value={'500ml'}
								checked={filter?.sku?.size === '500ml'}
							/>
							<label
								htmlFor='size-sm'
								className='text-xs border border-gray-200 rounded-sm h-6 w-10 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'
							>
								500ml
							</label>
						</div>
						<div className='size-selector'>
							<input
								type='radio'
								name='size'
								id='size-m'
								className='hidden'
								onChange={handleSizeChange}
								value={'1L'}
								checked={filter?.sku?.size === '1L'}
							/>
							<label
								htmlFor='size-m'
								className='text-xs border border-gray-200 rounded-sm h-6 w-10 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'
							>
								1L
							</label>
						</div>
						<div className='size-selector'>
							<input
								type='radio'
								name='size'
								id='size-l'
								className='hidden'
								onChange={handleSizeChange}
								value={'1.5L'}
								checked={filter?.sku?.size === '1.5L'}
							/>
							<label
								htmlFor='size-l'
								className='text-xs border border-gray-200 rounded-sm h-6 w-10 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'
							>
								1.5L
							</label>
						</div>
					</div>
				</div>

				<div className='pt-4'>
					<h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>
						Color
					</h3>
					<div className='flex items-center gap-2'>
						{' '}
						<div className='color-selector'>
							<input
								type='radio'
								name='color'
								id='red'
								className='hidden'
								value={'Red'}
								checked={filter?.sku?.color === 'red'}
								onChange={handleColorChange}
							/>
							<label
								htmlFor='red'
								className='border border-gray-200 rounded-sm h-6 w-10 cursor-pointer shadow-sm block'
								style={{ backgroundColor: '#fc3d57' }}
							></label>
						</div>
						<div className='color-selector'>
							<input
								type='radio'
								name='color'
								id='Pink'
								value={'pink'}
								className='hidden'
								checked={filter?.sku?.color === 'pink'}
								onChange={handleColorChange}
							/>
							<label
								htmlFor='pink'
								className='border border-gray-200 rounded-sm h-6 w-10 cursor-pointer shadow-sm block'
								style={{ backgroundColor: 'pink' }}
							></label>
						</div>
						<div className='color-selector'>
							<input
								type='radio'
								name='color'
								id='white'
								value={'White'}
								className='hidden'
								checked={filter?.sku?.color === 'white'}
								onChange={handleColorChange}
							/>
							<label
								htmlFor='white'
								className='border border-gray-200 rounded-sm h-6 w-10 cursor-pointer shadow-sm block'
								style={{ backgroundColor: '#fff' }}
							></label>
						</div>
					</div>
					<div className='flex items-center gap-2 mt-3'>
						<div className='color-selector'>
							<input
								type='radio'
								name='color'
								id='yellow'
								value={'Yellow'}
								className='hidden'
								checked={filter?.sku?.color === 'yellow'}
								onChange={handleColorChange}
							/>
							<label
								htmlFor='yellow'
								className='border border-gray-200 rounded-sm h-6 w-10 cursor-pointer shadow-sm block'
								style={{ backgroundColor: 'yellow' }}
							></label>
						</div>
						<div className='color-selector'>
							<input
								type='radio'
								name='color'
								id='orange'
								value={'Orange'}
								className='hidden'
								checked={filter?.sku?.color === 'orange'}
								onChange={handleColorChange}
							/>
							<label
								htmlFor='orange'
								className='border border-gray-200 rounded-sm h-6 w-10 cursor-pointer shadow-sm block'
								style={{ backgroundColor: 'orange' }}
							></label>
						</div>
					</div>
				</div>

				<div className='pt-4'>
					<Link
						href='/shop'
						className='block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'
					>
						Reset Filter
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
