import React from 'react';
import Button from '../../UI/Button/Button.jsx';
import style from './PersonalDescription.scss';

const PersonalDescription = () => {
  
  return(
    <div>
      <article>
        <h2 className={style.name}>JEFF CHO</h2>
        <h4 className={style.title}>SOFTWARE DEVELOPER</h4>
        <p className={style.description}>A full-stack web debeloper with a strong passion of building user centric UI/UX applications</p>
      </article>
      <Button btnType="AboutMeBtn">VIEW MY WORK</Button>
      <Button btnType="AboutMeBtn">CONTACT ME</Button>
    </div>
  )
};

export default PersonalDescription;