// Libraries
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

// Icons
import EyeIcon from "mdi-react/EyeIcon";
import KeyVariantIcon from "mdi-react/KeyVariantIcon";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";

// Components
// import { AuthConsumer, AuthContext } from "../../../App/AuthContext";

type SignInFormState = {
    showPassword: boolean,
    userlogin: boolean,
    userLoggedin: string
}

export default class SignInForm extends PureComponent<{}, SignInFormState> {
    state = {
        showPassword: false,
        userlogin: false,
        userLoggedin: ""
    }


	// checkUser(event) {
	// 	//fetch the data from loginUser
	// 	event.preventDefault();

	// 	let data = {
	// 		email: this.refs.email.value,
	// 		password: this.refs.password.value
	// 	};

	// 	if (data.email == null || data.password == null) {
	// 		window.alert("Please log in with your email/password.");
	// 	} else {
	// 		fetch("/api/loginUser", {
	// 			method: "POST",
	// 			headers: { "Content-Type": "application/json" },
	// 			body: JSON.stringify(data)
	// 		})
	// 			.then(response => response.json())
	// 			.then(resdata => {
	// 				this.setState({ userlogin: resdata.userLoggedin });

	// 				if (this.state.userlogin) {
	// 					localStorage.setItem("authToken", resdata.authToken);
	// 					this.props.login(data.email, data.password)
	// 					this.setState({userLoggedin: data.email});
	// 					// document.location.href = `/dashboard_default?email=${data.email}`;
						
	// 				} else {
	// 					window.alert("ERROR: WRONG PASSWORD/EMAIL");
	// 				}
	// 			});
	// 	}
	// }

	showPassword(e: React.MouseEvent) {
		e.preventDefault();
		this.setState(prevState => ({ showPassword: !prevState.showPassword }));
	}

	render() {
		const { showPassword } = this.state;

		return (
			<form className="form">
				<div className="form_form-group">
					<span className="form_form-group-label">Username</span>
					<div className="form_form-group-field">
						<div className="form_form-group-icon">
							<AccountOutlineIcon />
						</div>
						<input
							name="username"
							ref="email"
							type="text"
							placeholder="Name"
						/>
					</div>
				</div>
				<div className="form_form-group">
					<span className="form_form-group-label">Password</span>
					<div className="form_form-group-field">
						<div className="form_form-group-icon">
							<KeyVariantIcon />
						</div>
						<input
							name="password"
							ref="password"
							type={showPassword ? "text" : "password"}
							placeholder="Password"
						/>
						<button
							type="button"
							className={`form_form-group-button${
								showPassword ? " active" : ""
							}`}
							onClick={e => this.showPassword(e)}
						>
							<EyeIcon />
						</button>
					</div>
				</div>
				<div className="account_btns">
					<Link
						className="btn btn-primary account_btn"
						to={`/dashboard_default/${this.state.userLoggedin}`}
						// onClick={this.checkUser.bind(this)}
					>
						Sign In
					</Link>
					<Link className="btn btn-outline-primary account_btn" to="/signup">
						Create Account
					</Link>
				</div>
			</form>
		);
	}
}
