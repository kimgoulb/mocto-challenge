import React from 'react';

function FormField(props) {
  return(
    <div className="form__field">
      <label htmlFor={props.value.name}
             className="form__field-label">
        {props.value.label}
      </label>
      <input type={props.value.type}
             name={props.value.name}
             ref={props.value.ref}
             defaultValue={props.value.defaultValue}
             id={props.value.name}
             className="form__field-input" />
    </div>
  );
}

export default FormField;