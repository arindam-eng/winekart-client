import Image from 'next/image';
import { Inter } from 'next/font/google';
import Banner from './components/Home/Banner';
import Features from './components/Home/Features';
import Categories from './components/Home/Categories';
import NewArrival from './components/Home/NewArrival';
import BestSelling from './components/Home/BestSelling';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Banner />
			<Features />
			<Categories />
			<NewArrival />
			<BestSelling />
		</>
	);
}
