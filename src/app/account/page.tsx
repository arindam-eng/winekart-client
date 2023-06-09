'use client';
import Breadcrumb from '@/app/components/common/Breadcrumb';
import React, { useEffect, useState } from 'react';
import AccSidebar from '../components/account/Sidebar';
import ManageAcc from '../components/account/ManageAcc';
import ProfileForm from '../components/account/ProfileForm';
// import Wishlist from '../components/account/Wishlist';
import withAuth from '../components/auth-hoc/withAuth';
import OrderHistory from '../components/account/OrderHistory';
import { toast } from 'react-toastify';
import { useQuery } from '@apollo/client';
import { GET_USER } from '@/gql/users/user.gql';

interface PageProps {
	searchParams: any;
}

const Profile: React.FC<PageProps> = ({ searchParams }) => {
	const { data, loading, error } = useQuery(GET_USER);
	if (error) {
		toast.error(error.message);
	}

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
				<AccSidebar setEventKey={setEventKey} eventKey={eventKey} data={data} />
				{eventKey === 'manageAcc' ? (
					<ManageAcc />
				) : eventKey === 'profile' ? (
					<ProfileForm data={data} />
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
