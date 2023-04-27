import Banner from './components/home/Banner';
import Features from './components/home/Features';
import Categories from './components/home/Categories';
import NewArrival from './components/home/NewArrival';
import BestSelling from './components/home/BestSelling';

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
