import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem.jsx';

const NavigationItems = props => {
  return (
    <ul>
      <NavigationItem btnType={props.btnType}>HOME</NavigationItem>
      <NavigationItem btnType={props.btnType}>ABOUT</NavigationItem>
      <NavigationItem btnType={props.btnType}>APPLICATIONS</NavigationItem>
      <NavigationItem btnType={props.btnType}>SKILLS</NavigationItem>
      <NavigationItem btnType={props.btnType}>CONTACT</NavigationItem>
    </ul>
  )
}

export default NavigationItems;