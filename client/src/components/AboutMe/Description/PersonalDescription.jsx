import React from 'react';
import Button from '../../UI/Button/Button.jsx';
import style from './PersonalDescription.scss';

const PersonalDescription = () => {
  
  return(
    <div>
      <article>
        <h2 className={style.title}>SOFTWARE DEVELOPER</h2>
        <p className={style.description}>Hi!!! My name is Jeff. I am a full-stack web debeloper with a strong passion of building great UI/UX applications</p>
      </article>
      <Button btnType="AboutMeBtn">VIEW MY WORK</Button>
      <Button btnType="AboutMeBtn">CONTACT ME</Button>
    </div>
  )
};

export default PersonalDescription;