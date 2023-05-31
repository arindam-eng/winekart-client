import { Metadata } from 'next';
import { ApolloProviders } from './ApolloProvider';
import Copyright from './components/common/Copyright';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Navbar from './components/common/Navbar';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'WineKart',
	description:
		'This a wine ecommerce platform for learning , Built with Next JS and Nest JS',
	// name: 'Winekart',
	// content: 'width=device-width, initial-scale=1.0',
	// <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<ApolloProviders>
					<Header />
					<Navbar />
					{children}
					<Footer />
					<Copyright />
				</ApolloProviders>
			</body>
		</html>
	);
}

/**
 * Graphql with next js 13 repo - https://github.com/Thabish-Kader/Nextjs13-graphql/tree/main/app
 */
