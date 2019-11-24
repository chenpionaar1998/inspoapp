// Libraries
import React from 'react';
// import { Field, reduxForm } from 'redux-form';

// Icons
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import MailRuIcon from 'mdi-react/MailRuIcon';

// Components
import validator, {validatorType} from './util';

// Styles
import '../../../Scss/form.scss';


type SignUpFormState = {
    email: string;
    password: string;
    fname: string;
    lname: string;
    showPassword: boolean;
    USERINSERTED: boolean;
    // validator: validatorType;

}

export default class SignUpForm extends React.PureComponent<{}, SignUpFormState> {
    state = {
        email: '',
        password: '',
        fname: '',
        lname: '',
        showPassword: false,
        USERINSERTED: false
    };

    // showPassword = showPassword.bind(this);

//   constructor(props) {
//     super(props);

    // this.validator = validator;
    // this.resetValidator();
    // this.resetValidator = this.resetValidator.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.updateValidators = this.updateValidators.bind(this);
    // this.displayValidationErrors = this.displayValidationErrors.bind(this);
    // this.addUser = this.addUser.bind(this);

    // this.fnameInput = React.createRef();
    // this.lnameInput = React.createRef();
    // this.emailInput = React.createRef();
    // this.passwordInput = React.createRef();

//   };

  componentDidMount() {
    const submitButton = document.getElementById("submit") as HTMLButtonElement;
    if (submitButton) submitButton.disabled = true;
  }

//   resetValidator() {
//     Object.keys(this.validator).forEach((fieldName) => {
//       this.validator[fieldName].errors = [];
//       this.validator[fieldName].state = '';
//       this.validator[fieldName].valid = false;
//     });
//   }

//   handleInputChange(event, inputPropName) {
//     const newState = Object.assign({}, this.state);
//     // newState.inputPropName = event.target.value;
//     this.setState(newState);
//     this.updateValidators(inputPropName, event.target.value);
//   }

//   updateValidators(fieldName, value) {
//     this.validator[fieldName].errors = [];
//     this.validator[fieldName].state = value;
//     this.validator[fieldName].valid = true;
//     this.validator[fieldName].rules.forEach((rule) => {
//       if (rule.test instanceof RegExp) {
//         if (!rule.test.test(value)) {
//           this.validator[fieldName].errors.push(rule.message);
//           this.validator[fieldName].valid = false;
//         }
//       } else if (typeof rule.test === 'function') {
//         if (!rule.test(value)) {
//           this.validator[fieldName].errors.push(rule.message);
//           this.validator[fieldName].valid = false;
//         }
//       }
//     });
//     let status = true;
//     Object.keys(this.validator).forEach((field) => {
//       if (!this.validator[field].valid) {
//         status = false;
//       }
//     });
//     document.getElementById('submit').disabled = status ? false : true;
//   }

//   displayValidationErrors(fieldName) {
//     const validator = this.validator[fieldName];
//     const result = '';
//     if (validator && !validator.valid) {
//       const errors = validator.errors.map((info, index) => {
//         return (
//           <div>
//             <span className="error" key={index}> {info}</span>
//             <br />
//           </div >
//         );
//       });
//       return (
//         <div>
//           {errors}
//         </div>
//       );
//     }
//     return result;
//   }

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
              id="fname"
              type="text"
              ref="fname"
              name="fname"
              placeholder="First name"
            //   ref={this.fnameInput}
            //   onChange={event => this.handleInputChange(event, 'fname')} 
            />
          </div>
          {/* {this.displayValidationErrors('fname')} */}
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
              ref="lname"
              name="lname"
              placeholder="Last name"             
            //   ref={this.lnameInput}
            //   onChange={event => this.handleInputChange(event, 'lname')}
            /> 
          </div>
          {/* {this.displayValidationErrors('lname')} */}
        </div>
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
            //   ref={this.emailInput}
            //   onChange={event => this.handleInputChange(event, 'email')}
            />
          </div>
          {/* {this.displayValidationErrors('email')} */}
        </div>
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
            //   ref={this.passwordInput}
            //   onChange={event => this.handleInputChange(event, 'password')}
            />
            <button
              type="button"
              className={`form_form-group-button${showPassword ? ' active' : ''}`}
              onClick={e => this.showPassword(e)}
            ><EyeIcon />
            </button>
          </div>
          {/* {this.displayValidationErrors('password')} */}
        </div>
        <div className="account_btns">
          <button id="submit" className="btn btn-primary account_btn" onClick={e => this.addUser(e)}>Sign Up</button>
        </div>
      </form>
    );
  }
}