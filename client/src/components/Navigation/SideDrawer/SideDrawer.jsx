import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems.jsx';
import style from './SideDrawer.scss';

const SideDrawer = props => {
  let attachedStyle = [style.SideDrawer, style.Close];

  if (props.showSideDrawer) {
    attachedStyle = [style.SideDrawer, style.Open];
  }

  return (
    <div className={attachedStyle.join(' ')}>
      <NavigationItems />
    </div>
  )
};

export default SideDrawer;