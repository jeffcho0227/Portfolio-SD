import React from 'react';
import ApplicationCards from '../../components/ApplicationCards/ApplicationCards.component.jsx';
import TitleBlock from '../../components/UI/TitleBlock/TitleBlock.jsx';
import style from './Applications.scss';
import Data from '../../../dist/assets/Data/Data.js';

const Applications = () => {
  return (
    <div className={style.ApplicationContainer}>
      <TitleBlock>APPLICATIONS</TitleBlock>
      <div>
        {Data.map((applications, idx) => {
          console.log(applications)
          return <ApplicationCards applications={applications} key={idx}/>
        })}
      </div>
    </div>
  )
};

export default Applications;

