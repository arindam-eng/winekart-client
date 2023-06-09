import Link from 'next/link';
import React from 'react';

const OrderSucceed = () => {
	return (
		<div className='max-w-md mx-auto bg-white shadow-md p-6 rounded-lg m-4'>
			<h2 className='text-2xl font-semibold text-green-600 mb-4'>
				Order Successful
			</h2>
			<p className='text-gray-700'>
				Thank you for your order! Your payment has been successfully processed,
				and your order will be shipped soon.
			</p>
      <div className="mt-6 flex">
          <Link
            href="/account?menu=orderHist"
            className="flex items-center justify-center w-full bg-red-500 hover:bg-blue-600 text-white py-3 rounded-md"
          >
            Order History
          </Link>
        </div>
		</div>
	);
};

export default OrderSucceed;
