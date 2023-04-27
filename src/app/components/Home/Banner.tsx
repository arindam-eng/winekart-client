import Link from 'next/link';
import React from 'react';

const Banner = () => {
	return (
		<div
			className='bg-cover bg-no-repeat bg-center py-36'
			style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/006/661/792/original/red-and-white-wine-in-clear-glass-many-blurred-wine-bottle-backgrounds-place-it-on-a-cement-floor-with-a-wooden-board-wall-the-cellar-tasting-production-concept-3d-rendering-free-photo.jpg')` }}
		>
			<div className='container'>
				<h1 className='text-6xl text-white font-medium mb-4 capitalize'>
					best collection for <br /> home decoration
				</h1>
				<p className='text-white'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{' '}
					<br />
					accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
					odio
				</p>
				<div className='mt-12'>
					<Link
						href='/shop'
						className='bg-primary border border-primary text-white px-8 py-3 font-medium 
                rounded-md hover:bg-transparent hover:text-primary'
					>
						Shop Now
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
