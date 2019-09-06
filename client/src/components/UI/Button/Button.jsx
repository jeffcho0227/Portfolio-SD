import React from 'react';
import style from './Button.scss';

const Button = props => {
  return (
    <button
      className={[style.btn, style[props.btnType]].join(' ')}>{props.children}</button>
  )
};

export default Button;