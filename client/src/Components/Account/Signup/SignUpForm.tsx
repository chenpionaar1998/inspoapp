// Libraries
import React from 'react';
import { Link } from "react-router-dom";
import { Input } from 'reactstrap';

// Icons
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import MailRuIcon from 'mdi-react/MailRuIcon';

// Components
import validator, {validatorType} from './validator';

// Styles
import '../../../Scss/form.scss';

// Types 
import { UpdateUserInfoAction } from '../duck/Types';

type SignUpFormState = {
  email: string;
  password: string;
  fname: string;
  lname: string;
  showPassword: boolean;
  shouldShowCreateError: boolean;
}

type SignUpFormProps = {
  signedIn: boolean;
  history: any;
  signUp: (formData: AccountInfoType) => UpdateUserInfoAction;
}

export type AccountInfoType = {
  email: string;
  password: string;
  fname: string;
  lname: string;
}

export default class SignUpForm extends React.Component<SignUpFormProps, SignUpFormState> {
  state = {
    email: '',
    password: '',
    fname: '',
    lname: '',
    showPassword: false,
    shouldShowCreateError: false
  };

  validator: validatorType = validator;

  componentDidMount() {
    // Initialize validator
    this.resetValidator();
  }

  componentDidUpdate(prevProps: SignUpFormProps) {
		if (this.props.signedIn && this.props.signedIn !== prevProps.signedIn) {
			this.props.history.push('/dashboard');
		}
	}

  resetValidator = () => {
    for (let key of Object.entries(validator)) {
      key[1].errors = [];
      key[1].state = '';
      key[1].valid = false;
    }
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, inputPropName: string) => {
    this.setState<never>( {
      [inputPropName] : event.target.value
    });

    this.updateValidators(inputPropName, event.target.value);
  }

  updateValidators = (fieldName: string, value: string) => {
    this.validator[fieldName].errors = [];
    this.validator[fieldName].state = value;
    this.validator[fieldName].valid = true;
    this.validator[fieldName].rules.forEach((rule) => {
        if (!rule.test(value)) {
          this.validator[fieldName].errors.push(rule.message);
          this.validator[fieldName].valid = false;
        }
      }
    );

    this.displayValidationErrors(fieldName);
  }

  displayValidationErrors = (fieldName: string) => {
    const v = this.validator[fieldName];
    const result = '';
    if (!v.valid) {
      const errors = v.errors.map((info, index) => {
        return (
          <div key={index} className="error_div">
            <span className="error"> {info}</span>
            <br />
          </div>
        );
      });
      return errors;
    }
    return result;
  }

  showPassword(e: React.MouseEvent): void {
    e.preventDefault();
    this.setState((prevState: SignUpFormState) => ({ showPassword: !prevState.showPassword }));
  }

  addUser = (e: React.MouseEvent): void => {
    e.preventDefault();

    let formData: AccountInfoType = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      password: this.state.password,
    }

    if (!this.hasEmptyFields() && !this.hasValidatorError()){
      this.props.signUp(formData);
    }
  }

  hasValidatorError = (): boolean => {
    for (const field in this.validator) {
      if (this.validator[field].errors.length !== 0) {
        return true;
      }
    }
    return false;
  }

  hasEmptyFields = (): boolean => {
    return this.state.email === "" || this.state.fname === "" || this.state.lname === "" || this.state.password === "";
  }

  render() {
    const { showPassword } = this.state;

    return (
      <form className="form" >
        <div className="form_form-group">
          <span className="form_form-group-label">First name</span>
          <div className="form_form-group-field">
            <div className="form_form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Input
              id = "fname"
              type = "text"
              name = "fname"
              placeholder = "First name"
              value = {this.state.fname}
              onChange={event => this.handleInputChange(event, 'fname')} 
            />
          </div>
          <div className="error_div_container">
           {this.displayValidationErrors('fname')}
          </div>
        </div>
        <div className="form_form-group">
          <span className="form_form-group-label">Last name</span>
          <div className="form_form-group-field">
            <div className="form_form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Input
              id="lname"
              type="text"
              name="lname"
              placeholder="Last name"  
              value = {this.state.lname}           
              onChange={event => this.handleInputChange(event, 'lname')}
            /> 
          </div>
          <div className="error_div_container">
           {this.displayValidationErrors('lname')}
          </div>        
        </div>
        <div className="form_form-group">
          <span className="form_form-group-label">E-mail</span>
          <div className="form_form-group-field">
            <div className="form_form-group-icon">
              <MailRuIcon />
            </div>
            <Input
              id="email"
              type="email"
              ref="email"
              name="email"
              placeholder="example@mail.com"
              value = {this.state.email}
              onChange={event => this.handleInputChange(event, 'email')}
            />
          </div>
          <div className="error_div_container">
           {this.displayValidationErrors('email')}
          </div>        
        </div>
        <div className="form_form-group form_form-group--forgot">
          <span className="form_form-group-label">Password</span>
          <div className="form_form-group-field">
            <div className="form_form-group-icon">
              <KeyVariantIcon />
            </div>
            <Input
              id="password"
              ref="password"
              name="password"
              type={this.state.showPassword ? 'text' : 'password'}
              placeholder="Password"
              value = {this.state.password}
              onChange={event => this.handleInputChange(event, 'password')}
            />
            <button
              type="button"
              className={`form_form-group-button${showPassword ? ' active' : ''}`}
              onClick={e => this.showPassword(e)}
            ><EyeIcon />
            </button>
          </div>
          <div className="error_div_container">
           {this.displayValidationErrors('password')}
          </div>        
        </div>
        <div className="account_btns">
          <Link id="submit" className="btn btn-primary account_btn signup_btn" to={`/dashboard`} onClick={this.addUser}>Sign Up</Link>
        </div>
      </form>
    );
  }
}