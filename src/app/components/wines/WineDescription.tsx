import React from 'react';
import { Product } from '../shop/ProductListing';
import { Sku } from './WineDetails';

interface Props {
	product: Product;
	skuDetails: Sku;
}

const WineDescription: React.FC<Props> = ({ product, skuDetails }) => {
	return (
		<div className='container pb-16'>
			<h3 className='border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium mt-5'>
				Product details
			</h3>
			<div className='w-3/5 pt-6'>
				<div className='text-gray-600'>
					<p>{product.description}</p>
				</div>

				<table className='table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6'>
					<tbody>
						<tr>
							<th className='py-2 px-4 border border-gray-300 w-40 font-medium'>
								Color
							</th>
							<th className='py-2 px-4 border border-gray-300 '>
								{skuDetails?.color}
							</th>
						</tr>
						<tr>
							<th className='py-2 px-4 border border-gray-300 w-40 font-medium'>
								Producer
							</th>
							<th className='py-2 px-4 border border-gray-300 '>
								{product.producer}
							</th>
						</tr>
						<tr>
							<th className='py-2 px-4 border border-gray-300 w-40 font-medium'>
								Vintage
							</th>
							<th className='py-2 px-4 border border-gray-300 '>
								{product.vintage}
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default WineDescription;
