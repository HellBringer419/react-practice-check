import axios from "axios";
import React, { useState, useEffect } from "react";

const CompanyDetailsComponent = ({ company, handleClickRemove, watchList }) => {
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
				<button
					type="button"
					className="btn btn-danger"
					onClick={() => handleClickRemove(watchList)}
				>
					Remove
				</button>
			</div>
		</div>
	);
};

const WatchListComponent = ({ userId }) => {
	const [companiesWatching, setCompaniesWatching] = useState([]);

	useEffect(() => {
		axios
			.get(`/watchList/${userId}`)
			.then((res) => setCompaniesWatching(res.data));
	}, []);

	const handleClickRemove = (watchList) => {
		axios
			.delete("/watchList", { data: watchList })
			.then(() => {
				let newCompaniesWatching = companiesWatching.filter(
					(i) => i.id != watchList.id
				);
				setCompaniesWatching(newCompaniesWatching);
				window.alert("Successfully added to the watch list");
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="container">
			<h2>My Companies List</h2>
			{companiesWatching.length == 0 ? (
				"No company stock prices added to watch list"
			) : (
				<div className="row row-cols-1 row-cols-md-3 g-4">
					{companiesWatching.map((watch) => {
						return (
							<div className="col" key={watch.id}>
								<CompanyDetailsComponent
									company={watch.company}
									watchList={watch}
									handleClickRemove={handleClickRemove}
								/>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default WatchListComponent;
