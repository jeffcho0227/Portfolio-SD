import React from 'react';
import style from './AppDescrip.scss';

const AppDescrip = props => {
  return (
    <div className={style.AppDescripContainer}>
      {props.description}
    </div>
  )
};

export default AppDescrip;