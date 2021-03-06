import { Link } from "react-router-dom";

const MenuComponent = ({ isLoggedIn, changeLoginStatus }) => {
	if (isLoggedIn) {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container-fluid">
						<Link className="navbar-brand" to="/">
							mStock App
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									{/* <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </Link> */}
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/companies">
										Companies
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/watch">
										Watch List
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										to="/performance"
									>
										Compare Performance
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link"
										to="/"
										onClick={() => changeLoginStatus("")}
									>
										Logout
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	} else {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container-fluid">
						<Link className="navbar-brand" to="/">
							mStock App
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link className="nav-link" to="/">
										Login
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/companies">
										Companies
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
};

export default MenuComponent;
