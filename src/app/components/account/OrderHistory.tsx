/* eslint-disable @next/next/no-img-element */
import React from 'react';
import withAuth from '../auth-hoc/withAuth';
import OrderHistoryItem from '../orders/OrderHistoryItem';

const OrderHistory = () => {
	return (
		<div className='col-span-9 space-y-4'>
			<OrderHistoryItem />
		</div>
	);
};

export default withAuth(OrderHistory);
