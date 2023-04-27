'use client';
import Breadcrumb from '@/app/components/common/Breadcrumb';
import React, { useEffect, useState } from 'react';
import AccSidebar from '../components/account/Sidebar';
import ManageAcc from '../components/account/ManageAcc';
import ProfileForm from '../components/account/ProfileForm';
import Wishlist from '../components/account/Wishlist';

interface PageProps {
	searchParams: any;
}

const Profile: React.FC<PageProps> = ({ searchParams }) => {
	const [eventKey, setEventKey] = useState('manageAcc');
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
				) : eventKey === 'wishlist' ? (
					<Wishlist />
				) : null}
			</div>
		</>
	);
};

export default Profile;
