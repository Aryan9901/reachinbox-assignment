import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// import { Signup } from "./pages";
import { Loader, Sidebar } from "./components/elements";
import Header from "./components/elements/Header";

const Signup = React.lazy(() => import("./pages/Signup"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Home = React.lazy(() => import("./pages/Home"));
const Inbox = React.lazy(() => import("./pages/Inbox"));

function App() {
	const location = useLocation();

	// List of routes where the sidebar should not be displayed
	const noSidebarRoutes = ["/signup"];

	const isNoSidebarRoute = noSidebarRoutes.includes(location.pathname);

	return (
		<div className="flex min-h-screen w-full flex-col bg-muted/40">
			{!isNoSidebarRoute && <Sidebar isLoginPage={!isNoSidebarRoute} />}
			<div className={`flex flex-col min-h-screen ${isNoSidebarRoute ? "" : "sm:pl-14"}`}>
				{!isNoSidebarRoute && <Header />}
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/signup" element={<Signup />} />
						<Route path="/" element={<Home />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/mail" element={<Home />} />
						<Route path="/compose" element={<Home />} />
						<Route path="/list" element={<Home />} />
						<Route path="/inbox" element={<Inbox />} />
						<Route path="/history" element={<Home />} />
					</Routes>
				</Suspense>
			</div>
		</div>
	);
}

export default App;
