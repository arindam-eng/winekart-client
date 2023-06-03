'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface SortingHeaderProps {
	query: any;
}

const SortingHeader: React.FC<SortingHeaderProps> = ({ query }) => {
	const router = useRouter();
	const [filter, setFilter] = useState(query);

	useEffect(() => {
		const decodedObject = query?.filterQuery
			? JSON.parse(query.filterQuery)
			: {};
		setFilter(decodedObject);
	}, [query]);

	return (
		<div
			className='flex items-center mb-4'
			style={{ justifyContent: 'flex-end' }}
		>
			<select
				name='sort'
				id='sort'
				className='w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary'
				value={filter?.sort}
				onChange={(e) =>
					router.push(
						`/shop?filterQuery=${encodeURIComponent(
							JSON.stringify({ sort: e.target.value })
						)}`
					)
				}
			>
				<option value='-_id'>Default sorting</option>
				<option value='price'>Price low to high</option>
				<option value='-price'>Price high to low</option>
				<option value='-createdAt'>Latest product</option>
			</select>
		</div>
	);
};

export default SortingHeader;
