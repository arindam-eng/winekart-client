'use client';
import React, { useEffect, useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/navigation';

const SEND_OTP = gql`
	mutation SendOtp($sendOtpInput: SendOtpInput!) {
		sendOtp(sendOtpInput: $sendOtpInput) {
			data
		}
	}
`;

const VERIFY_OTP = gql`
	mutation VerifyOtp($verifyOtpInput: VerifyOtpInput!) {
		verifyOtp(verifyOtpInput: $verifyOtpInput) {
			data
		}
	}
`;

const initalOtpForm = { data: '', otp: '' };
const OtpLogin = () => {
	const [otpForm, setOtpForm] = useState(initalOtpForm);
	const [otpInputShow, setOtpInputShow] = useState(false);
	const router = useRouter();

	const [
		sendOtp,
		{ data: sendOtpData, loading: sendOtpLoading, error: sendOtpError },
	] = useMutation(SEND_OTP);
	const [
		verifyOtp,
		{ data: verifyOtpData, loading: verifyOtpLoading, error: verifyOtpError },
	] = useMutation(VERIFY_OTP);

	useEffect(() => {
		if (sendOtpData?.sendOtp && !sendOtpError) {
			setOtpInputShow(true);
		}
		if (verifyOtpData?.verifyOtp?.data) {
			localStorage.setItem('wine_token', verifyOtpData?.verifyOtp?.data);
			location.href = '/';
		}
	}, [router, sendOtpData, sendOtpError, verifyOtpData]);

	const handleSendOtp = async (e: any) => {
		try {
			e.preventDefault();
			const response = otpForm?.otp
				? await verifyOtp({
						variables: {
							verifyOtpInput: {
								data: otpForm.data,
								otp: otpForm.otp,
							},
						},
				  })
				: await sendOtp({
						variables: {
							sendOtpInput: {
								data: otpForm.data,
							},
						},
				  });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form action='#' method='post' autoComplete='off'>
			<div className='space-y-2'>
				<div>
					<label htmlFor='email' className='text-gray-600 mb-2 block'>
						Email address/Phone Number
					</label>
					<input
						type='text'
						name='emailPhn'
						id='emailPhn'
						className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400'
						placeholder='youremail.@domain.com/+9199******6'
						onChange={(e) => setOtpForm({ ...otpForm, data: e.target.value })}
					/>
				</div>
				{otpInputShow && (
					<div>
						<label htmlFor='password' className='text-gray-600 mb-2 block'>
							OTP
						</label>
						<input
							type='number'
							name='otp'
							id='otp'
							className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400'
							placeholder='965416'
							maxLength={6}
							onChange={(e) => setOtpForm({ ...otpForm, otp: e.target.value })}
						/>
					</div>
				)}
			</div>
			<div className='mt-4'>
				<button
					type='submit'
					className='block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium'
					disabled={sendOtpLoading || verifyOtpLoading}
					onClick={handleSendOtp}
				>
					{sendOtpLoading || verifyOtpLoading ? 'Loading...' : 'Login'}
				</button>
				{(verifyOtpError || sendOtpError) && (
					<p>Error: {verifyOtpError?.message || sendOtpError?.message}</p>
				)}
			</div>
		</form>
	);
};

export default OtpLogin;
