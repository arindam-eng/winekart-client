import React from 'react';

const SortingHeader = () => {
	return (
		<div className='flex items-center mb-4' style={{ justifyContent: 'flex-end' }}>
			<select
				name='sort'
				id='sort'
				className='w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary'
			>
				<option value=''>Default sorting</option>
				<option value='price-low-to-high'>Price low to high</option>
				<option value='price-high-to-low'>Price high to low</option>
				<option value='latest'>Latest product</option>
			</select>
		</div>
	);
};

export default SortingHeader;
