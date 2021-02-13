import CompaniesListComponent from "./components/companydetailscomponent";
import LoginComponent from "./components/logincomponent";
import MenuComponent from "./components/menucomponent";

function App() {
	return (
		<div className="App">
			<MenuComponent isLoggedIn={false} />
      <LoginComponent />
		</div>
	);
}

export default App;
