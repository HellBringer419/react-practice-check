import axios from "axios";
import React, { useState, useEffect } from "react";

const CompanyDetailsComponent = ({ company, isLoggedIn, handleClickWatch }) => {
	return (
		<div
			className="card text-dark bg-light mb-3"
			style={{ width: "18rem" }}
		>
			<div className="card-header fw-bolder">{company.companyName}</div>
			<div className="card-body">
				<h5 className="card-title"></h5>
				<p className="card-text">{company.description}</p>
			</div>
			<div className="card-footer fw-bolder">
				Today's price: ${company.currentStockPrice}
				&nbsp;
				{isLoggedIn ? (
					<button
						type="button"
						className="btn btn-primary"
						onClick={() => handleClickWatch(company.companyId)}
					>
						Watch
					</button>
				) : (
					""
				)}
			</div>
		</div>
	);
};

const CompaniesListComponent = ({ isLoggedIn }) => {
	const [companies, setCompanies] = useState([]);

	useEffect(() => {
		axios.get("/companies").then((res) => setCompanies(res.data));
	}, []);

	const handleClickWatch = (companyId) => {
		console.log(companyId);
		// axios.post("/watchList")
		// TODO: do a post request
	};

	return (
		<div className="container">
			<h2>Companies List</h2>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{companies.map((company) => {
					return (
						<div className="col" key={company.companyId}>
							<CompanyDetailsComponent
								company={company}
								isLoggedIn={isLoggedIn}
								handleClickWatch={handleClickWatch}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CompaniesListComponent;
