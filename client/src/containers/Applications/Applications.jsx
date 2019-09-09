import React from 'react';
import ApplicationComp from '../../components/Application/ApplicationComp.jsx';
import TitleBlock from '../../components/UI/TitleBlock/TitleBlock.jsx';
import style from './Applications.scss';
import Data from '../../../dist/assets/Data/Data.js';

const Applications = () => {
  return (
    <div className={style.ApplicationContainer}>
      <TitleBlock>APPLICATIONS</TitleBlock>
      <div>
        {Data.map((app, idx) => {
          return <ApplicationComp app={app} key={idx} num={idx}/>
        })}
      </div>
    </div>
  )
};

export default Applications;

