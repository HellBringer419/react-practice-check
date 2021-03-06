import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class LoginComponent extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			errors: { email: "", password: "", credentials: "" },
		};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.validateFields = this.validateFields.bind(this);
		this.callApi = this.callApi.bind(this);
	}
	

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();

		let newErrors = { email: "", password: "", credentials: "" };
		if (this.state.email.length < 1) newErrors.email = "Email is required";
		if (this.state.password.length < 1)
			newErrors.password = "Password is required";

		this.setState({ errors: newErrors }, () => {
			if (
				this.state.errors.email == "" &&
				this.state.errors.password == ""
			) {
				this.callApi();
			}
		});
	}

	validateFields(event) {
		const { name, value } = event.target;

		if (value.length < 1) {
			let newErrors = { ...this.state.errors };
			const nameInCamelCase =
				name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
			newErrors[name] = nameInCamelCase + " is required";
			this.setState({ errors: newErrors });
		} else {
			let newErrors = { ...this.state.errors };
			newErrors[name] = "";
			this.setState({ errors: newErrors });
		}
	}

	callApi() {
		const user = {
			email: this.state.email,
			password: this.state.password,
		};
		axios
			.post("/users", user)
			.then((res) => {
				this.props.changeLoginStatus(res.data.id);
				this.props.history.push('/watch');
			})
			.catch((error) => {
				let newErrors = {
					email: "",
					password: "",
					credentials: "Invalid username/password",
				};
				this.setState({ errors: newErrors });
				console.log("error is:" + error);
			});
	}

	render() {
		return (
			<div className="container">
				<h2>Let's get started by login</h2>
				<form onSubmit={this.handleSubmit}>
					<p className="text-danger">
						Fields marked with * are mandatory
					</p>
					<ul>
						{this.state.errors.email == "" ? (
							""
						) : (
							<li>{this.state.errors.email}</li>
						)}
						{this.state.errors.password == "" ? (
							""
						) : (
							<li>{this.state.errors.password}</li>
						)}
						{this.state.errors.credentials == "" ? (
							""
						) : (
							<li>{this.state.errors.credentials}</li>
						)}
					</ul>
					<div className="mb-3">
						<label
							htmlFor="exampleInputEmail1"
							className="form-label"
						>
							Email address<span className="text-danger">*</span>
						</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
							onBlur={this.validateFields}
						/>
					</div>
					<div className="mb-3">
						<label
							htmlFor="exampleInputPassword1"
							className="form-label"
						>
							Password<span className="text-danger">*</span>
						</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							onBlur={this.validateFields}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default withRouter(LoginComponent);
