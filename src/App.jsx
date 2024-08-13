import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// import { Signup } from "./pages";
import { Loader, Sidebar } from "./components/elements";
import Header from "./components/elements/Header";

const Signup = React.lazy(() => import("./pages/Signup"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

function App() {
	const location = useLocation();

	// List of routes where the sidebar should not be displayed
	const noSidebarRoutes = ["/login"];

	const isNoSidebarRoute = noSidebarRoutes.includes(location.pathname);

	return (
		<div className="flex min-h-screen w-full flex-col bg-muted/40">
			{!isNoSidebarRoute && <Sidebar />}
			<div className="flex flex-col sm:gap-4 sm:pb-4 sm:pl-14">
				<Header />
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/login" element={<Signup />} />
						<Route path="/" element={<Dashboard />} />
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
