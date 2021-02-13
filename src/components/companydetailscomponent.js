import axios from "axios";
import React, { useState, useEffect } from "react";

const CompanyDetailsComponent = ({
	companyName,
	description,
	currentStockPrice,
}) => {
	return (
		<div
			className="card text-dark bg-light mb-3"
			style={{ width: "18rem" }}
		>
			<div className="card-header fw-bolder">{companyName}</div>
			<div className="card-body">
				<h5 className="card-title"></h5>
				<p className="card-text">{description}</p>
			</div>
			<div className="card-footer fw-bolder">
				Today's price: ${currentStockPrice}
			</div>
		</div>
	);
};

const CompaniesListComponent = () => {
	const [companies, setCompanies] = useState([]);

	useEffect(() => {
		axios.get("/companies").then((res) => setCompanies(res.data));
	}, [companies]);

	return (
		<div className="container">
			<h2>Companies List</h2>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{companies.map((company) => {
					return (
						<div className="col" key={company.companyId}>
							<CompanyDetailsComponent
								companyName={company.companyName}
								description={company.description}
								currentStockPrice={company.currentStockPrice}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CompaniesListComponent;
