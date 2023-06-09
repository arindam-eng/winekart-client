'use client';
import { useState } from 'react';

interface PageProps {
	currentStep: number;
}

const OrderTrack: React.FC<PageProps> = ({ currentStep }) => {
	const steps = [
		{ title: 'Confirmed', description: 'Your order has been confirmed.' },
		{ title: 'Shipped', description: 'Your order has been shipped.' },
		{
			title: 'In Transit',
			description: 'Your order is out for delivery.',
		},
		{ title: 'Delivered', description: 'Your order has been delivered.' },
	];

	return (
		<div className='max-w-2xl py-2'>
			<div className='flex space-x-4'>
				{steps.map((step, index) => (
					<div key={index} className='flex items-center'>
						<div
							className={`w-6 h-6 rounded-full ${
								index < currentStep ? 'bg-green-500' : 'bg-gray-300'
							}`}
						/>
						<div
							className={`${
								index < currentStep
									? 'text-green-500 font-semibold'
									: 'text-gray-500'
							} ml-2`}
						>
							{step.title}
						</div>
					</div>
				))}
			</div>

			{/* <div className='mt-8'>
				<h2 className='text-xl font-semibold mb-2'>
					{steps[currentStep].title}
				</h2>
				<p className='text-gray-600'>{steps[currentStep].description}</p>
			</div>

			<div className='flex justify-between mt-8'>
				<button
					className={`px-4 py-2 text-sm rounded-md ${
						currentStep > 0
							? 'bg-gray-500 text-white'
							: 'bg-gray-300 text-gray-500 cursor-not-allowed'
					}`}
					disabled={currentStep === 0}
					onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
				>
					Previous
				</button>
				<button
					className={`px-4 py-2 text-sm rounded-md ${
						currentStep < steps.length - 1
							? 'bg-green-500 text-white'
							: 'bg-gray-300 text-gray-500 cursor-not-allowed'
					}`}
					disabled={currentStep === steps.length - 1}
					onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
				>
					Next
				</button>
			</div> */}
		</div>
	);
};

export default OrderTrack;
