import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
	return (
		<div className="w-full flex items-center justify-center h-screen bg-[#121212]">
			<RotatingLines
				visible={true}
				height="96"
				width="96"
				color="red"
				strokeWidth="3"
				animationDuration="0.75"
				ariaLabel="rotating-lines-loading"
				wrapperStyle={{}}
				wrapperClass=""
			/>
		</div>
	);
};

export default Loader;
