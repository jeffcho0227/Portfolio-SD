import React from 'react';
import Button from '../../UI/Button/Button.jsx';
import style from './PersonalDescription.scss';

const PersonalDescription = () => {
  
  return(
    <div>
      <article>
        <h2 className={style.name}>JEFF CHO</h2>
        <h4 className={style.title}>SOFTWARE DEVELOPER</h4>
        <p className={style.description}>A full-stack web developer with a strong passion for building user centric UI/UX applications</p>
      </article>
      <div className={style.aboutMeBtns}>
        <Button className={style.aboutMeBtn} btnType="AboutMeBtn">VIEW MY WORK</Button>
        <Button className={style.aboutMeBtn} btnType="AboutMeBtn">CONTACT ME</Button>
      </div>
    </div>
  )
};

export default PersonalDescription;