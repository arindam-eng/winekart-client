
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface WithAuthProps {
	// Add any additional props that the HOC adds here
}

function withAuth<P extends object>(
	Component: React.ComponentType<P & WithAuthProps>
): React.FC<P> {
	const AuthenticatedComponent: React.FC<P> = (props) => {
		const router = useRouter();
		useEffect(() => {
			const token = localStorage.getItem('wine_token');
			if (!token) {
				router.push('/auth');
			}
		}, [router]);
		return <Component {...(props as P)} />;
	};
	return AuthenticatedComponent;
}

// const HomePage: React.FC<HomePageProps> = () => {
// 	return <div>Home page</div>;
// };

// export default withAuth<HomePageProps>(HomePage);

export default withAuth;
