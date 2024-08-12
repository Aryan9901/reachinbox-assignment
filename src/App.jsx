import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// import { Signup } from "./pages";
import { Sidebar } from "lucide-react";
import { Loader } from "./components/elements";

const Signup = React.lazy(() => import("./pages/Signup"));

function App() {
	const location = useLocation();

	// List of routes where the sidebar should not be displayed
	const noSidebarRoutes = ["/login"];

	const isNoSidebarRoute = noSidebarRoutes.includes(location.pathname);

	return (
		<div className="flex">
			{!isNoSidebarRoute && <Sidebar />}
			<div className="flex-1">
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/login" element={<Signup />} />
						<Route path="/dashboard" element={<Signup />} />
						<Route path="/inbox" element={<Signup />} />
						<Route path="/mail" element={<Signup />} />
						<Route path="/new/mail" element={<Signup />} />
					</Routes>
				</Suspense>
			</div>
		</div>
	);
}

export default App;
