import React, { useState } from "react";
import CompaniesListComponent from "./components/companydetailscomponent";
import LoginComponent from "./components/logincomponent";
import MenuComponent from "./components/menucomponent";

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
			<CompaniesListComponent isLoggedIn={isLoggedIn} userId={userId} />
			{/* <LoginComponent changeLoginStatus={changeLoginStatus} /> */}
		</div>
	);
}

export default App;
