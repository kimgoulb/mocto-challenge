import React from 'react';

function SignUpConfirmation(props) {
  return (
    <div class="sign-up-confirmation">
      <h1>Welcome {props.fullname}!</h1>
      <p>You're all signed up.</p>
    </div>
  );
}

export default SignUpConfirmation;