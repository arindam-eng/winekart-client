'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Cart from './Cart';

const Header = () => {
	const [cartItemCount, setCartItemCount] = useState(
		localStorage.getItem('cartItemCount')
	);
	useEffect(() => {
		const handleLocalStorageChange = (event: any) => {
			const { key, value } = event.detail;
			if (key !== 'cartItemCount') return null;
			setCartItemCount(value);
		};
		window.addEventListener('localStorageChange', handleLocalStorageChange);
		return () => {
			window.removeEventListener(
				'localStorageChange',
				handleLocalStorageChange
			);
		};
	}, []);

	const [cartOpen, setCartOpen] = useState(false);
	return (
		<>
			<header className='py-4 shadow-sm bg-white'>
				<div className='container flex items-center justify-between'>
					<Link href='/'>
						<h3 className='px-4 py-2 text-3xl text-white bg-gradient-to-r from-black to-red-500 rounded-lg font-bold tracking-wider flex'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 22 22'
								strokeWidth={1.5}
								stroke='#e8e8ec'
								className='w-6 h-6 mt-1 mr-1'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5'
								/>
							</svg>
							WINEKART
						</h3>
					</Link>

					<div className='w-full max-w-xl relative flex'>
						<span className='absolute left-4 top-3 text-lg text-gray-400'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
								/>
							</svg>
						</span>
						<input
							type='text'
							name='search'
							id='search'
							className='w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline hidden md:flex'
							placeholder='search'
						/>
						<button className='bg-secondary border border-primary text-black px-8 rounded-r-md'>
							Search
						</button>
					</div>

					<div className='flex items-center space-x-4'>
						<Link
							href='/account?menu=wishlist'
							className='text-center text-gray-700 hover:text-primary transition relative'
						>
							<div className='text-2xl'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6 ml-3'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
									/>
								</svg>
							</div>
							<div className='text-xs leading-3'>Wishlist</div>
							<div className='absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
								8
							</div>
						</Link>
						<Link
							href='#'
							className='text-center text-gray-700 hover:text-primary transition relative'
							onClick={(e: any) => {
								e.preventDefault();
								setCartOpen(true);
							}}
						>
							<div className='text-2xl'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
									/>
								</svg>
							</div>
							<div className='text-xs leading-3'>Cart</div>
							<div className='absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
								{cartItemCount || 0}
							</div>
						</Link>
						<Link
							href='/account'
							className='text-center text-gray-700 hover:text-primary transition relative'
						>
							<div className='text-2xl'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6 ml-3'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
									/>
								</svg>
							</div>
							<div className='text-xs leading-3'>Account</div>
						</Link>
					</div>
				</div>
			</header>
			<Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
		</>
	);
};

export default Header;
