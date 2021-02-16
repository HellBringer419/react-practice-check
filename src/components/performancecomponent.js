import axios from "axios";
import React, { useEffect, useState } from "react";

const PerformanceComponent = () => {
	const [companies, setCompanies] = useState([]);
	const [company1, setCompany1] = useState({});
	const [company2, setCompany2] = useState({});
	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");
	const [performances, setPerformances] = useState([]);

	useEffect(() => {
		axios
			.get("/companies")
			.then((res) => setCompanies(res.data))
			.catch((error) => console.log(error));
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.get("/stocks/compare-performance", {
				params: {
					companyCode1: company1,
					companyCode2: company2,
					from: from,
					to: to,
				},
			})
			.then((res) => setPerformances(res.data.sort((e1, e2) => e1.id-e2.id)))
			.catch((error) => console.log(error));
	};

	return (
		<div className="container">
			<h2>Compare potential companies</h2>
			<h3 className="text-muted">Make smart investment decision</h3>
			<form onSubmit={handleSubmit}>
				<div className="row mb-4">
					<div className="col">
						<label htmlFor="company1" className="form-label">
							Select company 1
						</label>
						<select
							className="form-select"
							aria-label="Select company 1"
							id="company1"
							value={company1}
							onChange={(event) =>
								setCompany1(event.target.value)
							}
							required
						>
							<option value="">choose..</option>
							{companies.map((company) => (
								<option
									key={company.companyId}
									value={company.companyId}
								>
									{company.companyName}
								</option>
							))}
						</select>
					</div>
					<div className="col">
						<label htmlFor="company2" className="form-label">
							Select company 2
						</label>
						<select
							className="form-select"
							aria-label="Select company 2"
							id="company2"
							value={company2}
							onChange={(event) =>
								setCompany2(event.target.value)
							}
							required
						>
							<option value="">choose..</option>
							{companies.map((company) => (
								<option
									key={company.companyId}
									value={company.companyId}
								>
									{company.companyName}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="row mb-4">
					<div className="col">
						<label htmlFor="from" className="form-label">
							From Date
						</label>
						<input
							type="date"
							id="from"
							className="form-control"
							value={from}
							onChange={(event) => setFrom(event.target.value)}
							required
						/>
					</div>
					<div className="col">
						<label htmlFor="to" className="form-label">
							To Date
						</label>
						<input
							type="date"
							id="to"
							className="form-control"
							value={to}
							onChange={(event) => setTo(event.target.value)}
							required
						/>
					</div>
				</div>
				<input
					type="submit"
					value="Fetch Details"
					className="btn btn-primary"
				/>
			</form>
			<br />

			{performances.length == 0 ? (
				""
			) : (
				<div>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Date</th>
								<th scope="col">Company</th>
								<th scope="col">Stock Price</th>
							</tr>
						</thead>
						<tbody>
							{performances.map((performance, index) =>
								(index % 2 == 0) ? (
									<tr key={performance.id}>
										<th scope="row" rowSpan="2">
											{performance.date}
										</th>
										<td>
											{performance.company.companyName}
										</td>
										<td>{performance.stockPrice}</td>
									</tr>
								) : (
									<tr key={performance.id}>
										<td>
											{performance.company.companyName}
										</td>
										<td>{performance.stockPrice}</td>
									</tr>
								)
							)}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default PerformanceComponent;
