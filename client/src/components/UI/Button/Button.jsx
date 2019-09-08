import React from 'react';
import style from './Button.scss';

const Button = props => {
  let action = null;
  if (props.click) {
    action = props.click;
  } else {
    action = () => console.log('testing!!');
  }
  
  return (
    <button
      className={[style.btn, style[props.btnType]].join(' ')}
      onClick={action}>{props.children}</button>
  )
};

export default Button;