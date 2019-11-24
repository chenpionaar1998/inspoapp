// Libraries
import React from 'react';

// Icons
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import MailRuIcon from 'mdi-react/MailRuIcon';

// Components
import validator, {validatorType} from './validator';

// Styles
import '../../../Scss/form.scss';

type SignUpFormState = {
    formInput: formInputType;
    showPassword: boolean;
    USERINSERTED: boolean;
}

type formInputType = {
  email: string;
  password: string;
  fname: string;
  lname: string;
}

export default class SignUpForm extends React.Component<{}, SignUpFormState> {
  state = {
      formInput: 
        { email: '',
        password: '',
        fname: '',
        lname: '' },
      showPassword: false,
      USERINSERTED: false
  };

  validator: validatorType = validator;

  componentDidMount() {
    // Disable submit button
    const submitButton = document.getElementById("submit") as HTMLButtonElement;
    if (submitButton) {
      submitButton.disabled = true;
    }

    // Initialize validator
    this.resetValidator();
  }

  resetValidator = () => {
    for (let key of Object.entries(validator)) {
      key[1].errors = [];
      key[1].state = '';
      key[1].valid = false;
    }
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, inputPropName: string) => {
    const newState = Object.assign({}, this.state);
    this.setState(newState);

    this.updateValidators(inputPropName, event.target.value);
  }

  updateValidators = (fieldName: string, value: string) => {
    this.validator[fieldName].errors = [];
    this.validator[fieldName].state = value;
    this.validator[fieldName].valid = true;
    this.validator[fieldName].rules.forEach((rule) => {
        if (!rule.test(value)) {
          console.log(rule.message);
          this.validator[fieldName].errors.push(rule.message);
          this.validator[fieldName].valid = false;
        }
      }
    );

    let status = true;
    Object.keys(this.validator).forEach((field) => {
      if (!this.validator[field].valid) {
        status = false;
      }
    });

    this.displayValidationErrors(fieldName);

    const submitButton = document.getElementById('submit') as HTMLButtonElement;
    if (submitButton) {
      submitButton.disabled = status ? false : true;
    }
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
          </ div>
        );
      });
      return errors;
    }
    return result;
  }

  showPassword(e: React.MouseEvent) {
    e.preventDefault();
    this.setState((prevState: SignUpFormState) => ({ showPassword: !prevState.showPassword }));
  }

  addUser = (e: React.MouseEvent) => {
    // e.preventDefault();
    // let formData = {
    //   fname: this.fnameInput.current.value,
    //   lname: this.lnameInput.current.value,
    //   email: this.emailInput.current.value,
    //   password: this.passwordInput.current.value,
    // }
    // fetch('/api/insertUser', {
    //   method: "POST",
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   this.setState({ USERINSERTED: data.USERINSERTED });
    //   if (this.state.USERINSERTED) {
    //     document.location.href = "/";
    //   } 
    //   else {
    //     window.alert("ERROR: user already exist");
    //   }
    // });
    
  }

  render() {
    // const { handleSubmit } = this.props;
    const { showPassword } = this.state;

    return (
      <form className="form" >
        <div className="form_form-group">
          <span className="form_form-group-label">First name</span>
          <div className="form_form-group-field">
            <div className="form_form-group-icon">
              <AccountOutlineIcon />
            </div>
            <input
              id = "fname"
              type = "text"
              name = "fname"
              placeholder = "First name"
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
            <input
              id="lname"
              type="text"
              name="lname"
              placeholder="Last name"             
              onChange={event => this.handleInputChange(event, 'lname')}
            /> 
          </div>
          <div className="error_div_container">
           {this.displayValidationErrors('lname')}
          </div>        </div>
        <div className="form_form-group">
          <span className="form_form-group-label">E-mail</span>
          <div className="form_form-group-field">
            <div className="form_form-group-icon">
              <MailRuIcon />
            </div>
            <input
              id="email"
              type="email"
              ref="email"
              name="email"
              placeholder="example@mail.com"
              onChange={event => this.handleInputChange(event, 'email')}
            />
          </div>
          <div className="error_div_container">
           {this.displayValidationErrors('email')}
          </div>        </div>
        <div className="form_form-group form_form-group--forgot">
          <span className="form_form-group-label">Password</span>
          <div className="form_form-group-field">
            <div className="form_form-group-icon">
              <KeyVariantIcon />
            </div>
            <input
              id="password"
              ref="password"
              name="password"
              type={this.state.showPassword ? 'text' : 'password'}
              placeholder="Password"
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
          </div>        </div>
        <div className="account_btns">
          <button id="submit"  className="btn btn-primary account_btn" onClick={e => this.addUser(e)}>Sign Up</button>
        </div>
      </form>
    );
  }
}