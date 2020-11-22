import React, { FunctionComponent } from 'react';
import ButtonProps from './Button.types';
import './Button.css';

const Button: FunctionComponent<ButtonProps> = ({ 
  text, 
  type 
}): JSX.Element => (
  <button className='button' type={type}>
    {text}
  </button>
);

export default Button;