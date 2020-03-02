import React from 'react';

function FormField(props) {
  return(
    <div class="form__field">
      <label for={props.value.name}>{props.value.label}</label>
      <input type={props.value.type}
             id={props.value.name}
             name={props.value.name}
             ref={props.value.ref}
             defaultValue={props.value.defaultValue} />
    </div>
  );
}

export default FormField;