import React from 'react';
import style from './DrawerToggle.scss';

const DrawerToggle = props => {
  return (
    <div 
      className={style.DrawerToggle}
      onClick={props.handleSideDrawerClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default DrawerToggle;