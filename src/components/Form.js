import React from 'react';
import Field from './Field';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        {this.props.fields.map((value, index) => {
          return <Field key={index} value={value} />
        })}

        <input type="submit"
               name="submit"
               value={this.props.submitButton.text} />
        
        {(this.props.backButton.show) ? (
          <button name="back"
                  onClick={this.props.backButton.onClick}>
            {this.props.backButton.text}
          </button>
        ) : null}
      </form>
    );
  }
}

export default Form;