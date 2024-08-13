import { homeBanner } from "../assets/images";

const Home = () => {
	return (
		<div className="flex flex-col items-center justify-center py-12 gap-4">
			<img src={homeBanner} alt="hero banner" className="w-[280px]" />
			<h2 className="text-2xl font-bold">It&apos;s the beginning of a legendary sales pipeline </h2>
			<p className="text-lg text-[#9E9E9E] text-balance mx-auto text-center font-medium">
				When you have inbound E-mails <br /> you&apos;ll see them here
			</p>
		</div>
	);
};

export default Home;
