/* eslint-disable @next/next/no-img-element */

'use client';
import React, { useEffect, useState } from 'react';
import withAuth from '../auth-hoc/withAuth';
import OrderHistoryItem from '../orders/OrderHistoryItem';
import { ORDER_HISTORY } from '@/gql/orders/order.gql';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import Loader from '../common/Loader';
import OrderedItems from '../common/OrderedItems';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface PageProps {
	searchParams: any;
}

const OrderHistory: React.FC<PageProps> = ({ searchParams }) => {
	const [confirmOrders, { data: orders, loading, error }] =
		useMutation(ORDER_HISTORY);

	const [pagination, setPagination] = useState({ skip: 0, limit: 10 });

	const [allOrders, setAllOrders] = useState<any[]>([]);

	if (error) {
		toast.error(error.message);
	}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const fetchData = async (skip?: number, limit?: number): Promise<any> => {
		try {
			const response = await confirmOrders({
				variables: {
					skip: skip || 0,
					limit: limit || 10,
				},
			});
			setAllOrders(response?.data?.confirmOrders);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handlePagination = async (left: boolean) => {
		const updatedSkip = left ? pagination.skip - 10 : pagination.skip + 10;
		const updatedLimit = 10;
		setPagination({
			skip: updatedSkip,
			limit: updatedLimit,
		});
		await fetchData(updatedSkip, updatedLimit);
	};

	const [open, setOpen] = useState(false);
	const [order, setOrder] = useState<any>();

	return (
		<>
			<div className='col-span-9 space-y-4'>
				{loading ? (
					<Loader loading={loading} />
				) : allOrders?.length > 0 ? (
					allOrders.map((order: any, index: number) => (
						<OrderHistoryItem
							key={index}
							order={order}
							setOpen={setOpen}
							setOrder={setOrder}
						/>
					))
				) : (
					<h2>No orders found</h2>
				)}
				<nav
					className='isolate inline-flex -space-x-px rounded-md shadow-sm float-right'
					aria-label='Pagination'
				>
					<Link
						href='#'
						className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
						onClick={(e: any) => {
							e.preventDefault();
							if (pagination.skip > 0) handlePagination(true);
						}}
					>
						<span className='sr-only'>Previous</span>
						<ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
					</Link>
					<Link
						href='#'
						className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
						onClick={(e: any) => {
							e.preventDefault();
							if(allOrders?.length > 0)
							handlePagination(false);
						}}
					>
						<span className='sr-only'>Next</span>
						<ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
					</Link>
				</nav>
			</div>
			<br />

			<OrderedItems
				open={open}
				setOpen={setOpen}
				items={order?.items}
				costDetails={order?.costDetails}
				orderId={order?.orderId}
			/>
		</>
	);
};

export default withAuth(OrderHistory);
