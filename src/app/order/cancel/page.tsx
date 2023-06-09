/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

const OrderCancel = () => {
	return (
		<div className='max-w-md mx-auto bg-white shadow-md p-6 rounded-lg m-5'>
			<h2 className='text-2xl font-semibold text-red-600 mb-4'>Order Failed</h2>
			<p className='text-gray-700'>
				We're sorry, but there was an issue processing your order. Please
				contact customer support for assistance.
			</p>
			
			<div className="mt-6 flex">
          <Link
            href="/shop"
            className="flex items-center justify-center w-full bg-red-500 hover:bg-blue-600 text-white py-3 rounded-md"
          >
            Shop more
          </Link>
        </div>
		</div>
	);
};

export default OrderCancel;
