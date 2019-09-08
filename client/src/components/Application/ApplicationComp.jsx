import React from 'react';
import AppImages from './AppImges/AppImages.jsx';
import AppDescrip from './AppDescrip/AppDescrip.jsx';
import TechStack from './TechStack/TechStack.jsx';
import SecLine from '../UI/SecLine/SecLine.jsx';
import style from './ApplicationComp.scss';

const ApplicationComp = props => {
  return (
    <div className={style.ApplicationCompContainer}>
      <h2>{props.app.Title}</h2>
      <AppImages AppImages={props.app.Images}/>
      <AppDescrip description={props.app.Description}/>
      <TechStack techStack={props.app.TechStasck}/>
    </div>
  )
};

export default ApplicationComp;