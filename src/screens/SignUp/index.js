import React from 'react';
import SignUpConfirmation from '../SignUpConfirmation';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      totalSteps: 2,
      showConfirmation: false
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleBack = this._handleBack.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this._nextStep();
  }

  _handleBack(event) {
    event.preventDefault();
    this._prevStep();
  }

  _prevStep(event) {
    let currentStep = this.state.step;

    if (currentStep > 1) {
      this.setState({ step: currentStep - 1 });
    }
  }

  _nextStep() {
    let currentStep = this.state.step;

    if (currentStep < this.state.totalSteps) {
      this.setState({ step: currentStep + 1 });
    }
    else {
      this.setState({ showConfirmation: true });
    }
  }

  render() {
    return (
      <div>
        <div class="sign-up">
          <h1>Sign Up</h1>
          {/* <Form fields={[
            {
              name: "email",
              type: "email"
            },
            {
              name: "password",
              type: "password"
            },
            {
              name: "fullname",
              type: "text"
            },
            {
              name: "age",
              type: "number"
            }
          ]} /> */}

          {(!this.state.showConfirmation && this.state.step === 1) ? (
          <div class="step step-1">
            <form onSubmit={this._handleSubmit}>
              <div class="field">
                <label for="email">Email Address</label>
                <input type="email"
                  id="email"
                  name="email"
                  ref={(input) => this.email = input} />
              </div>

              <div class="field">
                <label for="password">Password</label>
                <input type="password"
                  id="password"
                  name="password"
                  ref={(input) => this.password = input} />
              </div>
              <input type="submit" value="Continue" />
            </form>
          </div>
          ) : null}

          {(!this.state.showConfirmation && this.state.step === 2) ? (
            <div class="step step-2">
              <form onSubmit={this._handleSubmit}>
                <div class="field">
                  <label for="fullname">Full Name</label>
                  <input type="text"
                    id="fullname"
                    name="fullname"
                    ref={(input) => this.fullname = input} />
                </div>

                <div class="field">
                  <label for="age">Age</label>
                  <input type="number"
                    id="age"
                    name="age"
                    ref={(input) => this.age = input} />
                </div>

                <input type="submit" value="Submit" />
                <button name="back" onClick={this._handleBack}>Back</button>
              </form>
            </div>
          ) : null }
          
        </div>
        
        {(this.state.showConfirmation) ? <SignUpConfirmation fullname={this.fullname.value} /> : null}
        
      </div>
    );
  }
}

export default SignUp;