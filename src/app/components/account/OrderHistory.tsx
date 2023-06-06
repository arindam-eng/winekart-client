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
	const fetchData = async () => {
		try {
			await confirmOrders({
				variables: {
					skip: pagination?.skip || 0,
					limit: pagination?.limit || 10,
				},
			});
		} catch (error) {
			// Handle errors
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [confirmOrders, pagination.limit, pagination.skip]);

	const handleScroll = async () => {
		// Check if the user has reached the bottom of the page
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			setPagination({
				skip: pagination.skip + 10,
				limit: pagination.limit + 10,
			});
		}
	};

	// Add the scroll event listener
	window.addEventListener('scroll', handleScroll);

	useEffect(() => {
		if (orders?.confirmOrders?.length > 0)
			setAllOrders([...allOrders, orders?.confirmOrders]);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orders, orders?.confirmOrders]);

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
			</div>
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
