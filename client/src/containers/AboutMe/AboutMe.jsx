import React from 'react';
import PersonalDescription from '../../components/AboutMe/Description/PersonalDescription.jsx';
import ProfilePic from '../../components/AboutMe/Picture/ProfilePic.jsx';
import style from './AboutMe.scss';

const AboutMe = () => {
  return (
    <div className={style.AboutMeContainer}>
      <PersonalDescription />
      <ProfilePic />
    </div>
  )
}

export default AboutMe;