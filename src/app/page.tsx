import Banner from './components/Home/Banner';
import Features from './components/Home/Features';
import Categories from './components/Home/Categories';
import NewArrival from './components/Home/NewArrival';
import BestSelling from './components/Home/BestSelling';

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
