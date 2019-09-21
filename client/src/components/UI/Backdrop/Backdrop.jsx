import React from 'react';
import style from './Backdrop.scss';

const Backdrop = props => {
  return (
    props.showSideDrawer ? <div className={style.Backdrop} onClick={props.handleSideDrawerClick}></div> : null
  )
}

export default Backdrop;``