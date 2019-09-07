import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem.jsx';

const NavigationItems = props => {
  return (
    <ul>
      <NavigationItem>HOME</NavigationItem>
      <NavigationItem>ABOUT</NavigationItem>
      <NavigationItem>APPLICATIONS</NavigationItem>
      <NavigationItem>SKILLS</NavigationItem>
      <NavigationItem>CONTACT</NavigationItem>
    </ul>
  )
}

export default NavigationItems;