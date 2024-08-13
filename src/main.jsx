import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
	<Auth0Provider
		domain="devaryan.us.auth0.com"
		clientId="qzR4dFxyjC3O0q6VJnXNkMiT8j0yIBKQ"
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}
	>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</Auth0Provider>
);
