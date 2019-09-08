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
      <NavigationItems btnType='sideDrawer'/>
      {/* <ProfilePic /> */}
      <span className={style.logo1}>
        <span className={style.logo2}></span>

      </span>
      <span className={style.logo3}></span>
      <span className={style.logo4}></span>
    </div>
  )
};

export default SideDrawer;