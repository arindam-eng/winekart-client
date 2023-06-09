'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const authToken =
			typeof window !== 'undefined'
				? window.localStorage.getItem('wine_token')
				: null;
		if (authToken) setLoggedIn(true);
	}, []);

	return (
		<nav className='bg-gray-800'>
			<div className='container flex'>
				<div className='flex items-center justify-between flex-grow md:pl-12 py-5'>
					<div className='flex items-center space-x-6 capitalize'>
						<Link
							href='/'
							className='text-gray-200 hover:text-white transition'
						>
							Home
						</Link>
						<Link
							href='/shop'
							className='text-gray-200 hover:text-white transition'
						>
							Shop
						</Link>
						<Link
							href='#'
							className='text-gray-200 hover:text-white transition'
						>
							About us
						</Link>
						<Link
							href='#'
							className='text-gray-200 hover:text-white transition'
						>
							Contact us
						</Link>
					</div>
					<Link
						href='/auth'
						className='text-gray-200 hover:text-white transition'
					>
						{loggedIn ? '' : 'Login'}
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
