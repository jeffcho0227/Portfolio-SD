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
        click={props.handleSideDrawerClick}>X</Button>
      <NavigationItems />
      <ProfilePic />
    </div>
  )
};

export default SideDrawer;