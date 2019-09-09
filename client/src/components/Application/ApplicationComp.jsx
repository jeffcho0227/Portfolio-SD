import React from 'react';
import AppImages from './AppImges/AppImages.jsx';
import AppDescrip from './AppDescrip/AppDescrip.jsx';
import TechStack from './TechStack/TechStack.jsx';
import SecLine from '../UI/SecLine/SecLine.jsx';
import style from './ApplicationComp.scss';

const ApplicationComp = props => {
  const order = props.num;

  let attachStyle = [style.ApplicationCompContainerDeskTop];
  if (order%2 === 1) {
    attachStyle = [style.ApplicationCompContainerDeskTopReverse]
  }
  return (
    <div className={style.ApplicationCompContainer}>
      <div className={style.ApplicationCompContainerMobile}>
        <h2>{props.app.Title}</h2>
        <div>
          <AppImages AppImages={props.app.Images}/>
        </div>
        <AppDescrip description={props.app.Description}/>
        {/* <TechStack techStack={props.app.TechStasck}/> */}
      </div>

      <div className={attachStyle}>
        <AppImages AppImages={props.app.Images}/>
        <div className={style.fullDescript}>
          <h2>{props.app.Title}</h2>
          <AppDescrip description={props.app.Description}/>
          <TechStack techStack={props.app.TechStasck}/>
        </div>
      </div>
    </div>
  )
};

export default ApplicationComp;