import { useContext } from "react";
import { Sun, MoonStarIcon } from "lucide-react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const ThemeToggle = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<button
			onClick={toggleTheme}
			className={`flex items-center px-2 justify-between ${theme === "dark" ? "" : ""} w-20 h-6 py-4  bg-gray-700 rounded-full`}
		>
			<div className={`transform transition-transform ${theme === "dark" ? "order-2" : "order-1"}`}>
				{theme !== "dark" ? <MoonStarIcon className="text-[#F6F1D5]" /> : <Sun className="text-yellow-500" />}
			</div>
			<div className={`w-6 h-6 rounded-full order-1 bg-gray-600 ${theme === "dark" ? "order-1" : "order-2"}`}></div>
		</button>
	);
};
