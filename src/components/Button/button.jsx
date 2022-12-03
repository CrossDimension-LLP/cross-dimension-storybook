import React from 'react';
import './button.css';

const Button = props => (
  <button onClick={props.onClick} style={props.style}>
    {props.label && <span>{props.label}</span>}
  </button>
);

export default Button;