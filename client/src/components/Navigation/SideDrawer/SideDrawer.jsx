import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems.jsx';
import ProfilePic from '../../AboutMe/Picture/ProfilePic.jsx';
import Button from '../../UI/Button/Button.jsx';
import style from './SideDrawer.scss';

const SideDrawer = props => {
  let attachedStyle = [style.SideDrawer, style.Close];

  if (props.showSideDrawer) {
    attachedStyle = [style.SideDrawer, style.Open];
  }

  return (
    <div className={attachedStyle.join(' ')}>
      <Button 
        btnType='SideDrawerClose'
        click={props.handleSideDrawerClick}><p>X</p></Button>
      <NavigationItems 
        btnType='sideDrawer'
        closeSideDrawer={props.handleSideDrawerClick}/>
    </div>
  )
};

export default SideDrawer;