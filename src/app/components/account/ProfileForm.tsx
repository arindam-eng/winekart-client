'use client';
import { GET_USER } from '@/gql/users/user.gql';
import { useQuery } from '@apollo/client';
import React from 'react';
import { toast } from 'react-toastify';

const ProfileForm = () => {
	const { data, loading, error } = useQuery(GET_USER);
	if (error) {
		toast.error(error.message);
	}

	return (
		<div className='col-span-9 shadow rounded px-6 pt-5 pb-7'>
			<h4 className='text-lg font-medium capitalize mb-4'>
				Profile information
			</h4>
			<div className='space-y-4'>
				<div className='grid grid-cols-2 gap-4'>
					<div>
						<label htmlFor='first'>First name</label>
						<input
							type='text'
							name='first'
							id='first'
							className='input-box'
							value={data?.user?.givenName}
							disabled
						/>
					</div>
					<div>
						<label htmlFor='last'>Last name</label>
						<input
							type='text'
							name='last'
							id='last'
							value={data?.user?.familyName}
							className='input-box'
							disabled
						/>
					</div>
				</div>
				{/* <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="birthday">Birthday</label>
                        <input type="date" name="birthday" id="birthday" className="input-box" />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" id="gender" className="input-box">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div> */}
				<div className='grid grid-cols-2 gap-4'>
					<div>
						<label htmlFor='email'>Email Address</label>
						<input
							type='email'
							name='email'
							id='email'
							value={data?.user?.email}
							className='input-box'
							disabled
						/>
					</div>
					<div>
						<label htmlFor='phone'>Phone number</label>
						<input
							type='text'
							name='phone'
							id='phone'
							className='input-box'
							value={
								data?.user?.phoneNumber &&
								`${data?.user?.dialingCode}-${data?.user?.phoneNumber}`
							}
							disabled
						/>
					</div>
				</div>
			</div>

			{/* <div className="mt-4">
                <button type="submit"
                    className="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">save
                    changes</button>
            </div> */}
		</div>
	);
};

export default ProfileForm;
