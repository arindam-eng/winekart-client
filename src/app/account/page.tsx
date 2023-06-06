'use client';
import Breadcrumb from '@/app/components/common/Breadcrumb';
import React, { useEffect, useState } from 'react';
import AccSidebar from '../components/account/Sidebar';
import ManageAcc from '../components/account/ManageAcc';
import ProfileForm from '../components/account/ProfileForm';
// import Wishlist from '../components/account/Wishlist';
import withAuth from '../components/auth-hoc/withAuth';
import OrderHistory from '../components/account/OrderHistory';

interface PageProps {
	searchParams: any;
}

const Profile: React.FC<PageProps> = ({ searchParams }) => {
	const [eventKey, setEventKey] = useState('profile');
	useEffect(() => {
		if (searchParams?.menu) {
			setEventKey((key) => searchParams?.menu);
		}
	}, [searchParams?.menu]);
	return (
		<>
			<Breadcrumb text='Account' />
			<div className='container grid grid-cols-12 items-start gap-6 pt-4 pb-16'>
				<AccSidebar setEventKey={setEventKey} eventKey={eventKey} />
				{eventKey === 'manageAcc' ? (
					<ManageAcc />
				) : eventKey === 'profile' ? (
					<ProfileForm />
				) : eventKey === 'orderHist' ? (
					<OrderHistory searchParams={searchParams} />
				) : // : eventKey === 'wishlist' ? (
				// 	<Wishlist />
				// )
				null}
			</div>
		</>
	);
};

export default withAuth(Profile);
