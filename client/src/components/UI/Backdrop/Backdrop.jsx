import React from 'react';
import style from './Backdrop.scss';

const Backdrop = props => {
  console.log(props.showSideDrawer)
  return (
    props.showSideDrawer ? <div className={style.Backdrop} onClick={props.handleSideDrawerClick}></div> : null
  )
}

export default Backdrop;