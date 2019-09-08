import React from 'react';
import Button from '../../../UI/Button/Button.jsx';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavigationItem = props => {
  return (
      <Button btnType='NavItem' 
              >
        <Link 
          activeClass="active" 
          to={props.position}
          smooth={true}
          duration={1500}
          onClick={props.click}>
            {props.children}
        </Link>
      </Button>
  )
};

export default NavigationItem;