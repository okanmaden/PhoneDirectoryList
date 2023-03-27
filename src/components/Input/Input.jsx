import React, { Fragment } from "react";
import "./Input.scss";
const Input = (props) => {
  
  return (
    <Fragment>
      <label htmlFor={props.id}>{props.label}</label>
      <input onChange={props.onChange} placeholder={props.name} type={props.type} id={props.id} value={props.value} className={`form-input ${props.valid === false ? '': 'invalid'}`} />
    </Fragment>
  );
};

export default Input;
