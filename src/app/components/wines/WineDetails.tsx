import React from 'react';

const WineDetails = () => {
	return (
		<div className='container grid grid-cols-3'>
			<div>
				<img
					src='https://yi-files.s3.eu-west-1.amazonaws.com/products/650000/650805/1130930-cover.jpg'
					alt='product'
					style={{ height: '520px', width: 'auto' }}
				/>
			</div>

			<div className='col-span-2'>
				<h2 className='text-3xl font-medium uppercase mb-2'>
					Italian L Shape Sofa
				</h2>
				<div className='flex items-center mb-4'>
					<div className='flex gap-1 text-sm text-yellow-400'>
						{Array.from({ length: 4 }, (_, index) => index + 1).map(
							(val, index) => {
								return (
									<span key={index}>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 24 24'
											fill='currentColor'
											className='w-6 h-6'
										>
											<path
												fillRule='evenodd'
												d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
												clipRule='evenodd'
											/>
										</svg>
									</span>
								);
							}
						)}
					</div>
					<div className='text-xs text-gray-500 ml-3'>(150 Reviews)</div>
				</div>
				<div className='space-y-2'>
					<p className='text-gray-800 font-semibold space-x-2'>
						<span>Availability: </span>
						<span className='text-green-600'>In Stock</span>
					</p>
					<p className='space-x-2'>
						<span className='text-gray-800 font-semibold'>Brand: </span>
						<span className='text-gray-600'>Apex</span>
					</p>
					<p className='space-x-2'>
						<span className='text-gray-800 font-semibold'>Category: </span>
						<span className='text-gray-600'>Sofa</span>
					</p>
					<p className='space-x-2'>
						<span className='text-gray-800 font-semibold'>SKU: </span>
						<span className='text-gray-600'>BE45VGRT</span>
					</p>
				</div>
				<div className='flex items-baseline mb-1 space-x-2 font-roboto mt-4'>
					<p className='text-xl text-primary font-semibold'>$45.00</p>
					<p className='text-base text-gray-400 line-through'>$55.00</p>
				</div>

				<p className='mt-4 text-gray-600'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius eum
					reprehenderit dolore vel mollitia optio consequatur hic asperiores
					inventore suscipit, velit consequuntur, voluptate doloremque iure
					necessitatibus adipisci magnam porro.
				</p>

				<div className='pt-4'>
					<h3 className='text-sm text-gray-800 uppercase mb-1'>Size</h3>
					<div className='flex items-center gap-2'>
						<div className='size-selector'>
							<input type='radio' name='size' id='size-xs' className='hidden' />
							<label
								htmlFor='size-xs'
								className='text-xs border border-gray-200 rounded-sm h-6 w-16 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'
							>
								250ml
							</label>
						</div>
						<div className='size-selector'>
							<input type='radio' name='size' id='size-sm' className='hidden' />
							<label
								htmlFor='size-sm'
								className='text-xs border border-gray-200 rounded-sm h-6 w-12 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'
							>
								500ml
							</label>
						</div>
						<div className='size-selector'>
							<input type='radio' name='size' id='size-m' className='hidden' />
							<label
								htmlFor='size-m'
								className='text-xs border border-gray-200 rounded-sm h-6 w-12 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'
							>
								1L
							</label>
						</div>
						<div className='size-selector'>
							<input type='radio' name='size' id='size-l' className='hidden' />
							<label
								htmlFor='size-l'
								className='text-xs border border-gray-200 rounded-sm h-6 w-12 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'
							>
								2.25L
							</label>
						</div>
					</div>
				</div>

				<div className='pt-4'>
					<h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>
						Color
					</h3>
					<div className='flex items-center gap-2'>
						<div className='color-selector'>
							<input type='radio' name='color' id='red' className='hidden' />
							<label
								htmlFor='red'
								className='border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block'
								style={{ backgroundColor: ' #fc3d57' }}
							></label>
						</div>
					</div>
				</div>

				<div className='mt-4'>
					<h3 className='text-sm text-gray-800 uppercase mb-1'>Quantity</h3>
					<div className='flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max'>
						<div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>
							-
						</div>
						<div className='h-8 w-8 text-base flex items-center justify-center'>
							4
						</div>
						<div className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>
							+
						</div>
					</div>
				</div>

				<div className='flex gap-3 border-b border-gray-200 pb-5 pt-5'>
					<a
						href='#'
						className='bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-6 h-6'
						>
							<path
								fillRule='evenodd'
								d='M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z'
								clipRule='evenodd'
							/>
						</svg>
						Add to cart
					</a>
					<a
						href='#'
						className='border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-6 h-6'
						>
							<path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
						</svg>
						Wishlist
					</a>
				</div>
			</div>
		</div>
	);
};

export default WineDetails;
