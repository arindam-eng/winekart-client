/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import Category from './Category';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { GET_WINE_CAT_QUERY } from '@/gql/wines/wine-category.gql';
import Loader from '../common/Loader';
import { toast } from 'react-toastify';

const Categories = () => {
	const { data, loading, error } = useQuery(GET_WINE_CAT_QUERY);
	if (error) {
		toast.error(error.message);
	}

	return (
		<div className='container py-16'>
			<h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>
				shop by category
			</h2>
			<div className='grid grid-cols-3 gap-3'>
				<Loader loading={loading} />
				{data?.categories?.length > 0 &&
					data.categories.map((cat: any, index: number) =>
						index <= 5 ? <Category cat={cat} key={cat?.categoryId} /> : null
					)}
			</div>
		</div>
	);
};

export default Categories;
