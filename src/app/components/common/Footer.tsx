import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-white pt-16 pb-12 border-t border-gray-100'>
			<div className='container grid grid-cols-1 '>
				<div className='col-span-1 space-y-4'>
					{/* <img src='assets/images/logo.svg' alt='logo' className='w-30' />
					 */}
					 <h3 className='px-4 py-2 text-1xl text-white bg-gradient-to-r from-black to-red-500 rounded-lg font-bold tracking-wider flex w-fit'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 2 28 28'
							strokeWidth={1.5}
							stroke='#e8e8ec'
							className='w-6 h-6 mt-1'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5'
							/>
						</svg>
						WINEKART
					</h3>
					<div className='mr-2'>
						<p className='text-gray-500'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
							hic?
						</p>
					</div>
					<div className='flex space-x-5'>
						<a href='#' className='text-gray-400 hover:text-gray-500'>
							<i className='fa-brands fa-facebook-square'></i>
						</a>
						<a href='#' className='text-gray-400 hover:text-gray-500'>
							<i className='fa-brands fa-instagram-square'></i>
						</a>
						<a href='#' className='text-gray-400 hover:text-gray-500'>
							<i className='fa-brands fa-twitter-square'></i>
						</a>
						<a href='#' className='text-gray-400 hover:text-gray-500'>
							<i className='fa-brands fa-github-square'></i>
						</a>
					</div>
				</div>

				<div className='col-span-2 grid grid-cols-2 gap-4'>
					<div className='grid grid-cols-2 gap-4 md:gap-8'>
						<div>
							<h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
								Solutions
							</h3>
							<div className='mt-4 space-y-4'>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900 block'
								>
									Marketing
								</a>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900 block'
								>
									Analitycs
								</a>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900 block'
								>
									Commerce
								</a>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900 block'
								>
									Insights
								</a>
							</div>
						</div>

						<div>
							<h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
								Support
							</h3>
							<div className='mt-4 space-y-4'>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900 block'
								>
									Pricing
								</a>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900 block'
								>
									Guides
								</a>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900 block'
								>
									API Status
								</a>
							</div>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-8'>
						<div>
							<h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
								Solutions
							</h3>
							<div className='mt-4 space-y-4'>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900 block'
								>
									Marketing
								</a>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900 block'
								>
									Analitycs
								</a>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900 block'
								>
									Commerce
								</a>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900 block'
								>
									Insights
								</a>
							</div>
						</div>

						<div>
							<h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider'>
								Support
							</h3>
							<div className='mt-4 space-y-4'>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900 block'
								>
									Pricing
								</a>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900 block'
								>
									Guides
								</a>
								<a
									href='#'
									className='text-base text-gray-500 hover:text-gray-900 block'
								>
									API Status
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
