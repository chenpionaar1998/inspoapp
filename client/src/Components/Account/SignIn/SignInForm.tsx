// Libraries
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Input } from 'reactstrap';

// Icons
import EyeIcon from "mdi-react/EyeIcon";
import KeyVariantIcon from "mdi-react/KeyVariantIcon";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";

// Types 
import { UpdateUserInfoAction } from '../duck/Types';

type SignInFormState = {
	email: string,
	password: string,
    showPassword: boolean,
}

type SignInFormProps = {
	history: any;
	signedIn: boolean;
	signIn: (formData: SignInFormType) => UpdateUserInfoAction;
}

export type SignInFormType = {
	email: string,
	password: string
}

export default class SignInForm extends PureComponent<SignInFormProps, SignInFormState> {
    state = {
		email: "",
 		password: "",
        showPassword: false
    }

	componentDidUpdate(prevProps: SignInFormProps) {
		if (this.props.signedIn && this.props.signedIn !== prevProps.signedIn) {
			this.props.history.push('/dashboard');
		}
	}

	checkUser = (e: React.MouseEvent): void => {
		//fetch the data from loginUser
		e.preventDefault();

		let formData: SignInFormType = {
			email: this.state.email,
			password: this.state.password
		};

		if (!this.hasEmptyFields()) {
			this.props.signIn(formData);
		}
	}

	handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, inputPropName: string): void => {
		this.setState<never>( {
			[inputPropName] : event.target.value
		});
	}

	showPassword = (e: React.MouseEvent): void => {
		e.preventDefault();
		this.setState(prevState => ({ showPassword: !prevState.showPassword }));
	}

	hasEmptyFields = () => {
		return this.state.email === "" || this.state.password === "";
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
						<Input
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
						<Input
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
							onClick={this.showPassword}
						>
							<EyeIcon />
						</button>
					</div>
				</div>
				<div className="account_btns">
					<Link
						className="btn btn-primary account_btn signin_btn"
						to={`/dashboard`}
 						onClick={this.checkUser}
					>
						Sign In
					</Link>
					<Link className="btn btn-outline-primary account_btn signup_btn" to="/signup">
						Create Account
					</Link>
				</div>
			</form>
		);
	}
}
