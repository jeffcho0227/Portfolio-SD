import React from 'react';
import style from './Button.scss';

const Button = props => {
  return (
    <button
      className={style[props.butnType]}>{props.children}</button>
  )
};

export default Button;