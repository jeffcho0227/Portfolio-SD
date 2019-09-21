import React from "react";
import style from './ApplicationCardFront.module.scss';

const ApplicationCardFront = ({Title, Image}) => {
  return (
    <div className={style.ApplicationCardFrontContainer}>
      <h3>{ Title }</h3>
      <img src={Image[0]} alt="application screen shot"/>
    </div>
  );
};

export default ApplicationCardFront;