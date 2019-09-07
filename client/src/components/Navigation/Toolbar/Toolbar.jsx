import React from 'react';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle.jsx';
import NavigationItems from '../NavigationItems/NavigationItems.jsx';
import style from './Toolbar.scss';

const Toolbar = props => {
  return (
    <div>
      <div>
        <DrawerToggle handleSideDrawerClick={props.handleSideDrawerClick}/>
      </div>
      <div className={style.DesktopOnly}>
        <NavigationItems/>
      </div>
    </div>
  )
}

export default Toolbar;