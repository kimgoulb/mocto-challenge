import React from 'react';

function SignUpConfirmation(props) {
  return (
    <div className="sign-up-confirmation">
      <div className="sign-up-confirmation__content">
        <h1 className="sign-up-confirmation__heading">Hi {props.fullname}! Welcome to the best place ever on earth!</h1>
        <p className="sign-up-confirmation__description">You’re now on the list for receiving amazing goodies.</p>
      </div>
    </div>
  );
}

export default SignUpConfirmation;