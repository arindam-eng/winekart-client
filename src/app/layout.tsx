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

export const metadata = {
	title: 'WineKart',
	description:
		'This a wine ecommerce platform for learning , Built with Next JS and Nest JS',
	name: 'viewport',
	content: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<Header />
				<Navbar />
				{children}
				<Footer />
				<Copyright />
			</body>
		</html>
	);
}
