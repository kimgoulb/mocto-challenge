import React from 'react';
import Form from './Form';

class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      totalSteps: 2,
      showConfirmation: false,
      fields: {
        email: null,
        password: null,
        fullname: null,
        age: null
      }
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleBack = this._handleBack.bind(this);
    this._updateFields = this._updateFields.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this._nextStep();
  }

  _handleBack(event) {
    event.preventDefault();
    this._prevStep();
  }

  _prevStep() {
    let currentStep = this.state.step;
    this._updateFields(currentStep);

    if (currentStep > 1) {
      this.setState({ step: currentStep - 1 });
    }
  }

  _nextStep() {
    let currentStep = this.state.step;
    this._updateFields(currentStep);

    if (currentStep < this.state.totalSteps) {
      this.setState({ step: currentStep + 1 });
    }
    else {
      this.setState({ showConfirmation: true });
      this.props.showConfirmation(true, this.fullname.value);
    }
  }

  _updateFields(currentStep) {
    let fields = this.state.fields;

    if (currentStep === 1) {
      this.setState({
        fields: {
          ...fields,
          email: this.email.value,
          password: this.password.value
        }
      });
    }

    if (currentStep === 2) {
      this.setState({
        fields: {
          ...fields,
          fullname: this.fullname.value,
          age: this.age.value
        }
      });
    }
  }

  render() {
    return (
      <div className="sign-up">
        <h1>Sign Up</h1>

        {(this.state.step === 1) ? (
          <div className={`step step-${this.state.step}`}>
            <h2>Set your email</h2>
            <Form onSubmit={this._handleSubmit}
              submitButton={{
                text: "Continue"
              }}
              backButton={{
                show: false
              }}
              fields={[
                {
                  name: "email",
                  type: "email",
                  ref: ((input) => this.email = input),
                  defaultValue: this.state.fields.email,
                  label: "Email Address"
                },
                {
                  name: "password",
                  type: "password",
                  ref: ((input) => this.password = input),
                  defaultValue: this.state.fields.password,
                  label: "Password"
                }
              ]} />
          </div>
        ) : null}

        {(this.state.step === 2) ? (
          <div className="step step-2">
            <h2>Set your password</h2>
            <Form onSubmit={this._handleSubmit}
              submitButton={{
                text: "Submit"
              }}
              backButton={{
                show: true,
                text: "Back",
                onClick: this._handleBack
              }}
              fields={[
                {
                  name: "fullname",
                  type: "text",
                  ref: ((input) => this.fullname = input),
                  defaultValue: this.state.fields.fullname,
                  label: "Full Name"
                },
                {
                  name: "age",
                  type: "number",
                  ref: ((input) => this.age = input),
                  defaultValue: this.state.fields.age,
                  label: "Age"
                }
              ]} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default SignUpForm;