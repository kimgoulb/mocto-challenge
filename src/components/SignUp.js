import React from 'react';
import SignUpForm from './SignUpForm';
import SignUpConfirmation from './SignUpConfirmation';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfirmation: false,
      fields: {}
    };
  }

  _showConfirmation(status, fields) {
    this.setState({ 
      showConfirmation: status,
      fields: fields
    });
  }


  render() {
    return (
      <div>
        {(!this.state.showConfirmation) ? (
          <SignUpForm showConfirmation={(status, fullname) => this._showConfirmation(status, fullname)} />
         ) : null}

        {(this.state.showConfirmation) ? (
          <SignUpConfirmation fullname={this.state.fields.fullname} /> 
        ) : null}
      </div>
    );
  }
}

export default SignUp;