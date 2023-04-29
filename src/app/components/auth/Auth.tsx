import React from 'react';
import SocialLogin from './SocialLogin';
import OtpLogin from './OtpLogin';

const Auth = () => {
	return (
		<div className='contain py-16'>
			<div className='max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden'>
				<h2 className='text-2xl uppercase font-medium mb-1'>Login</h2>
				<p className='text-gray-600 mb-6 text-sm'>welcome back customer</p>
				<OtpLogin />
				<div className='mt-6 flex justify-center relative'>
					<div className='text-gray-600 uppercase px-3 bg-white z-10 relative'>
						Or login with
					</div>
					<div className='absolute left-0 top-3 w-full border-b-2 border-gray-200'></div>
				</div>
				<SocialLogin />
			</div>
		</div>
	);
};

export default Auth;
