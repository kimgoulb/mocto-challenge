import React from 'react';
import SignUpForm from './SignUpForm';
import SignUpConfirmation from './SignUpConfirmation';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfirmation: false,
      fullname: null
    };
  }

  _showConfirmation(status, fullname) {
    this.setState({ 
      showConfirmation: status,
      fullname: fullname
    });
  }

  render() {
    return (
      <div>
        {(!this.state.showConfirmation) ? (
          <SignUpForm showConfirmation={(status, fullname) => this._showConfirmation(status, fullname)} />
         ) : null}

        {(this.state.showConfirmation) ? (
          <SignUpConfirmation fullname={this.state.fullname} /> 
        ) : null}
      </div>
    );
  }
}

export default SignUp;