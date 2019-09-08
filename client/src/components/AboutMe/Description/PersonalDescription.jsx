import React from 'react';
import Button from '../../UI/Button/Button.jsx';
import style from './PersonalDescription.scss';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const PersonalDescription = () => {
  <Link activeClass="active" className="contactMe" to="contactMe" spy={true} smooth={true} duration={500} >CONTACT ME</Link>
  return(
    <div>
      <article>
        <h2 className={style.name}>JEFF CHO</h2>
        <h4 className={style.title}>SOFTWARE DEVELOPER</h4>
        <p className={style.description}>A full-stack web developer with a strong passion for building user centric UI/UX applications</p>
      </article>
      <div className={style.aboutMeBtns}>
        <Button className={style.aboutMeBtn} btnType="AboutMeBtn">
          <Link activeClass="active" to="Applications" spy={true} smooth={true} duration={1500} >VIEW MY WORK</Link>
        </Button>
        <Button className={style.aboutMeBtn} btnType="AboutMeBtn">
          <Link activeClass="active" className="contactMe" to="contactMe" spy={true} smooth={true} duration={1500} >CONTACT ME</Link>
        </Button>
      </div>
    </div>
  )
};

export default PersonalDescription;