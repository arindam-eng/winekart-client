/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/navigation';
import React from 'react';

interface AccSidebarProps {
	eventKey: string;
	setEventKey: React.Dispatch<React.SetStateAction<string>>;
	data: Record<string, any>;
}

const AccSidebar: React.FC<AccSidebarProps> = ({
	eventKey,
	setEventKey,
	data,
}) => {
	const router = useRouter();

	const handleEventMenu = (e: any, key: string) => {
		e.preventDefault();
		router.push('/account?menu=' + key);
	};

	return (
		<div className='col-span-3'>
			<div className='px-4 py-3 shadow flex items-center gap-4'>
				<div className='flex-shrink-0'>
					<img
						src={data?.user?.picture}
						alt='profile'
						className='rounded-full w-14 h-14 border border-gray-200 p-1 object-cover'
					/>
				</div>
				<div className='flex'>
					<p className='text-gray-600'>Hello, &nbsp;</p>
					<h4 className='text-gray-800 font-medium'>{data?.user?.givenName}</h4>
				</div>
			</div>

			<div className='mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600'>
				<div className='space-y-1 pl-8'>
					{/* <a
						href='#'
						className={`relative block capitalize transition hover:text-primary ${
							eventKey === 'manageAcc' ? 'text-primary font-medium ' : ''
						}`}
						onClick={(e) => handleEventMenu(e, 'manageAcc')}
					>
						Manage account
					</a> */}
					<a
						href='#'
						className={`relative hover:text-primary block capitalize transition ${
							eventKey === 'profile' ? 'text-primary font-medium ' : ''
						}`}
						onClick={(e) => handleEventMenu(e, 'profile')}
					>
						Profile information
					</a>
					{/* <a
						href='#'
						className={`relative hover:text-primary block capitalize transition ${
							eventKey === 'manageAdd' ? 'text-primary font-medium ' : ''
						}`}
						onClick={(e) => handleEventMenu(e, 'manageAdd')}
					>
						Manage addresses
					</a> */}
					<a
						href='#'
						className={`relative hover:text-primary block capitalize transition ${
							eventKey === 'orderHist' ? 'text-primary font-medium ' : ''
						}`}
						onClick={(e) => handleEventMenu(e, 'orderHist')}
					>
						Order history
					</a>
					{/* <a
						href='#'
						className={`relative hover:text-primary block capitalize transition ${
							eventKey === 'wishlist' ? 'text-primary font-medium ' : ''
						}`}
						onClick={(e) => handleEventMenu(e, 'wishlist')}
					>
						My Wishlist
					</a> */}
				</div>

				<div className='space-y-1 pl-8 pt-4'>
					<a
						href='#'
						className='relative hover:text-primary block font-medium capitalize transition'
						onClick={(e: any) => {
							e.preventDefault();
							localStorage.removeItem('wine_token');
							location.reload();
						}}
					>
						<span className='absolute -left-8 top-0 text-base'>
							<i className='fa-solid fa-right-from-bracket'></i>
						</span>
						Logout
					</a>
				</div>
			</div>
		</div>
	);
};

export default AccSidebar;
