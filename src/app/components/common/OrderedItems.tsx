'use client';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ProductItem from '../cart/ProductItem';
import withAuth from '../auth-hoc/withAuth';

type CartProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	items: Record<string, any>[];
	costDetails: Record<string, any>;
	orderId: string;
};

const OrderedItem: React.FC<CartProps> = ({
	open,
	setOpen,
	items,
	costDetails,
	orderId,
}) => {
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as='div' className='relative z-10' onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter='ease-in-out duration-500'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in-out duration-500'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-hidden'>
					<div className='absolute inset-0 overflow-hidden'>
						<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
							<Transition.Child
								as={Fragment}
								enter='transform transition ease-in-out duration-500 sm:duration-700'
								enterFrom='translate-x-full'
								enterTo='translate-x-0'
								leave='transform transition ease-in-out duration-500 sm:duration-700'
								leaveFrom='translate-x-0'
								leaveTo='translate-x-full'
							>
								<Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
									<div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
										<div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
											<div className='flex items-start justify-between'>
												<Dialog.Title className='text-lg font-medium text-gray-900'>
													Order Items for <span className='text-red-500'>{orderId?.slice(-10)}</span>
												</Dialog.Title>
												<div className='ml-3 flex h-7 items-center'>
													<button
														type='button'
														className='-m-2 p-2 text-gray-400 hover:text-gray-500'
														onClick={() => setOpen(false)}
													>
														<span className='sr-only'>Close panel</span>
														<XMarkIcon className='h-6 w-6' aria-hidden='true' />
													</button>
												</div>
											</div>

											<div className='mt-8'>
												<div className='flow-root'>
													<ul
														role='list'
														className='-my-6 divide-y divide-gray-200'
													>
														{items?.length > 0
															? items.map((product: any, index: number) => (
																	<ProductItem
																		product={product}
																		cart={false}
																		key={product?.productId + index}
																	/>
															  ))
															: 'Empty Order List'}
													</ul>
												</div>
											</div>
										</div>

										<div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
											<div className='flex justify-between text-base font-medium text-gray-900'>
												<p>Shipping</p>
												<p>${costDetails?.shippingCost || 0}</p>
											</div>
											<div className='flex justify-between text-base font-medium text-gray-900'>
												<p>Total</p>
												<p>${costDetails?.grossAmount}</p>
											</div>
											<div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
												<p>
													or
													<button
														type='button'
														className='font-medium text-indigo-600 hover:text-indigo-500'
														onClick={() => setOpen(false)}
													>
														&nbsp; Continue Shopping
														<span aria-hidden='true'> &rarr;</span>
													</button>
												</p>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default withAuth(OrderedItem);
