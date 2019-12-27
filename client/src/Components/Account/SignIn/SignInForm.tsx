// Libraries
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

// Icons
import EyeIcon from "mdi-react/EyeIcon";
import KeyVariantIcon from "mdi-react/KeyVariantIcon";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";

// Components
// import { AuthConsumer, AuthContext } from "../../../App/AuthContext";

// Types 
import { SignInUserAction } from '../duck/Types';

type SignInFormState = {
	email: string,
	password: string,
    showPassword: boolean,
    userlogin: boolean,
}

type SignInFormProps = {
	userName: string;
	signInUser:  (formData: SignInFormType) => SignInUserAction;
}

export type SignInFormType = {
	email: string,
	password: string
}

export default class SignInForm extends PureComponent<SignInFormProps, SignInFormState> {
    state = {
		email: "",
 		password: "",
        showPassword: false,
        userlogin: false,
    }


	checkUser(e: React.MouseEvent) {
		//fetch the data from loginUser
		e.preventDefault();

		let formData: SignInFormType = {
			email: this.state.email,
			password: this.state.password
		};

		console.log('Signing in');
 		this.props.signInUser(formData);
	}

	handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, inputPropName: string) => {
		this.setState<never>( {
		  [inputPropName] : event.target.value
		});
	}

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
							type="text"
							placeholder="Username"
 							value={this.state.email}
 							onChange={event => this.handleInputChange(event, "email")}
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
							type={showPassword ? "text" : "password"}
							placeholder="Password"
							value={this.state.password}
 							onChange={event => this.handleInputChange(event, "password")}
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
						to={`/dashboard_default/${this.props.userName}`}
						onClick={this.checkUser}
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
