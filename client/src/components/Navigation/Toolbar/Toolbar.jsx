import React from 'react';
import Drawer from '../SideDrawer/DrawerToggle/DrawerToggle.jsx';
import NavigationItems from '../NavigationItems/NavigationItems.jsx';

const Toolbar = props => {
  return (
    <div>
      <Drawer />
      <NavigationItems/>
    </div>
  )
}

export default Toolbar;