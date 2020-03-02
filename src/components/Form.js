import React from 'react';
import FormField from './FormField';

class Form extends React.Component {
  render() {
    return (
      <form className={this.props.className} onSubmit={this.props.onSubmit}>
        <div className="form__fields">
          {this.props.fields.map((value, index) => {
            return <FormField key={index} value={value} />
          })}
        </div>

        <div className="form__actions">
          <input type="submit"
                name="submit"
                value={this.props.submitButton.text}
                className="form__button" />
          
          {(this.props.backButton.show) ? (
            <button name="back"
                    onClick={this.props.backButton.onClick}
              className="form__button form__button--link">
              {this.props.backButton.text}
            </button>
          ) : null}
        </div>
      </form>
    );
  }
}

export default Form;