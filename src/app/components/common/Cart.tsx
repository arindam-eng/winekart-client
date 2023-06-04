'use client';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ProductItem from '../cart/ProductItem';
import Loader from './Loader';
import { useMutation } from '@apollo/client';
import { ORDER_CHECKOUT } from '@/gql/orders/order.gql';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import localStorageManager from '@/helper/localStorageManager';
import withAuth from '../auth-hoc/withAuth';

type CartProps = {
	cartOpen: boolean;
	setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
	cartData: Record<string, any>;
	cartLoading: boolean;
};

const Cart: React.FC<CartProps> = ({
	cartOpen,
	setCartOpen,
	cartData,
	cartLoading,
}) => {
	const router = useRouter();
	const [
		checkoutOrder,
		{ data: checkoutData, loading: checkoutLoading, error: checkoutErr },
	] = useMutation(ORDER_CHECKOUT);
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState(0);
	console.log(cartData);
	useEffect(() => {
		if (cartData?.items) {
			setItems(cartData?.items);
			setTotal(
				cartData?.items?.reduce((acc: any, item: any) => {
					const itemTotal = item.sku?.price * item.quantity;
					return acc + itemTotal;
				}, 0)
			);
		}
	}, [cartData]);

	useEffect(() => {
		if (checkoutErr) {
			return toast.error(checkoutErr.message);
		}
		if (
			checkoutData?.checkoutSesionForAOrder?.sessionUrl &&
			checkoutData?.checkoutSesionForAOrder?.publicKey
		) {
			localStorageManager.setValue(
				'stripePublicKey',
				checkoutData?.checkoutSesionForAOrder?.publicKey
			);
			router.push(checkoutData?.checkoutSesionForAOrder?.sessionUrl);
		}
	}, [
		checkoutData?.checkoutSesionForAOrder?.publicKey,
		checkoutData?.checkoutSesionForAOrder?.sessionUrl,
		checkoutErr,
		router,
	]);

	const handleCheckout = async (e: any) => {
		e.preventDefault();
		if (checkoutLoading) return false;
		// eslint-disable-next-line react-hooks/rules-of-hooks
		await checkoutOrder();
	};

	return (
		<Transition.Root show={cartOpen} as={Fragment}>
			<Dialog as='div' className='relative z-10' onClose={setCartOpen}>
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
													Shopping cart
												</Dialog.Title>
												<Loader loading={cartLoading} />
												<div className='ml-3 flex h-7 items-center'>
													<button
														type='button'
														className='-m-2 p-2 text-gray-400 hover:text-gray-500'
														onClick={() => setCartOpen(false)}
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
																		key={product?.productId + index}
																	/>
															  ))
															: 'Cart Empty'}
													</ul>
												</div>
											</div>
										</div>

										<div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
											<div className='flex justify-between text-base font-medium text-gray-900'>
												<p>Subtotal</p>
												<p>${total}</p>
											</div>
											<p className='mt-0.5 text-sm text-gray-500'>
												Shipping and taxes calculated at checkout.
											</p>
											<div className='mt-6'>
												<a
													href='#'
													className='flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700'
													onClick={handleCheckout}
												>
													{checkoutLoading ? 'Loading... ' : 'Checkout'}
												</a>
											</div>
											<div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
												<p>
													or
													<button
														type='button'
														className='font-medium text-indigo-600 hover:text-indigo-500'
														onClick={() => setCartOpen(false)}
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

export default withAuth(Cart);
