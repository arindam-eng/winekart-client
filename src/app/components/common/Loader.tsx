import React, { CSSProperties } from 'react';
import { PropagateLoader } from 'react-spinners';

const override: CSSProperties = {
  display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderColor: 'red',
	textAlign: 'center',
};

interface LoaderProps {
	loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
	return (
		<PropagateLoader
			color={'#553549'}
			loading={loading}
			cssOverride={override}
			size={15}
			aria-label='Loading ...'
			data-testid='loader'
		/>
	);
};

export default Loader;
