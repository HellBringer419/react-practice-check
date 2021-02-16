import React, { useState } from "react";
import CompaniesListComponent from "./components/companydetailscomponent";
import LoginComponent from "./components/logincomponent";
import MenuComponent from "./components/menucomponent";
import PerformanceComponent from "./components/performancecomponent";
import WatchListComponent from "./components/watchlistcomponent";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userId, setUserId] = useState('');

	const changeLoginStatus = (userId) => {
		setIsLoggedIn(!isLoggedIn);
		setUserId(userId);
	};

	return (
		<div className="App">
			<MenuComponent isLoggedIn={isLoggedIn} />
			{/* <WatchListComponent userId={userId} /> */}
			{/* <CompaniesListComponent isLoggedIn={isLoggedIn} userId={userId} /> */}
			{/* <LoginComponent changeLoginStatus={changeLoginStatus} /> */}
			<PerformanceComponent />
		</div>
	);
}

export default App;
