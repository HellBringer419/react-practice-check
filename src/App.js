import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompaniesListComponent from "./components/companydetailscomponent";
import LoginComponent from "./components/logincomponent";
import MenuComponent from "./components/menucomponent";
import PerformanceComponent from "./components/performancecomponent";
import WatchListComponent from "./components/watchlistcomponent";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userId, setUserId] = useState("");

	const changeLoginStatus = (userId) => {
		setIsLoggedIn(!isLoggedIn);
		setUserId(userId);
	};

	return (
		<Router>
			<div className="App">
				<MenuComponent
					isLoggedIn={isLoggedIn}
					changeLoginStatus={changeLoginStatus}
				/>
				<Switch>
					<Route path="/" exact>
						<LoginComponent changeLoginStatus={changeLoginStatus} />
					</Route>
					<Route path="/companies">
						<CompaniesListComponent
							isLoggedIn={isLoggedIn}
							userId={userId}
						/>
					</Route>
					<Route path="/watch">
						<WatchListComponent userId={userId} />
					</Route>
					<Route path="/performance">
						<PerformanceComponent />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
