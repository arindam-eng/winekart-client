'use client';
import React, { useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/navigation';

const SOCIAL_LOGIN = gql`
	mutation SocialLogin($method: String!, $idToken: String!) {
		socialLogin(socialLogin: { method: $method, idToken: $idToken }) {
			data
		}
	}
`;

const SocialLogin = () => {
	const router = useRouter();

	const [socialLogin, { data: socialLoginData, loading, error }] =
		useMutation(SOCIAL_LOGIN);

	useEffect(() => {
		if (socialLoginData?.socialLogin?.data) {
			localStorage.setItem('wine_token', socialLoginData?.socialLogin?.data);
			location.href = '/'
		}
	}, [router, socialLoginData]);

	useEffect(() => {
		if (localStorage.getItem('wine_token')) {
			location.href = '/';
		}
	}, []);

	const handleSocialLogin = async (credentialResponse: any) => {
		const idToken = credentialResponse.credential; // replace with actual id token
		const method = 'google'; // replace with actual social login method
		try {
			await socialLogin({ variables: { method, idToken } });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<GoogleOAuthProvider clientId='595977208050-iubdd6jt5pi2t8td151kvi6iafh8b91k.apps.googleusercontent.com'>
			<div className='flex items-center justify-center mt-4'>
				{/* <a
					href='#'
					className='w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700'
				>
					facebook
				</a> */}
				{/* <a
					href='#'
					className='w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500'
				>
					google
				</a> */}
				<GoogleLogin
					onSuccess={(credentialResponse) => {
						console.log(credentialResponse);
						handleSocialLogin(credentialResponse);
					}}
					onError={() => {
						console.log('Login Failed');
					}}
					useOneTap
				/>
			</div>
		</GoogleOAuthProvider>
	);
};

export default SocialLogin;
