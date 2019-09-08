import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem.jsx';
import style from './NovigationItems.scss';

const NavigationItems = props => {
  return (
    <div className={style.NavigationItemsContainer}>
      <NavigationItem btnType={props.btnType} click={props.closeSideDrawer} position="">HOME</NavigationItem>
      <NavigationItem btnType={props.btnType} click={props.closeSideDrawer} position="">ABOUT</NavigationItem>
      <NavigationItem btnType={props.btnType} click={props.closeSideDrawer} position="Applications">APPLICATIONS</NavigationItem>
      <NavigationItem btnType={props.btnType} click={props.closeSideDrawer} position="Skills">SKILLS</NavigationItem>
      <NavigationItem btnType={props.btnType} click={props.closeSideDrawer} position="contactMe">CONTACT ME</NavigationItem>
    </div>
  )
}

export default NavigationItems;