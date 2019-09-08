import React from 'react';
import Application from '../../components/Application/ApplicationComp.jsx';
import TitleBlock from '../../components/UI/TitleBlock/TitleBlock.jsx';
import Data from '../../../dist/assets/Data/Data.js';

const Applications = props => {
  return (
    <div>
      <TitleBlock>APPLICATIONS</TitleBlock>
      <div>
        {Data.map((app, idx) => {
          return <Application app={app} key={idx}/>
        })}
      </div>
    </div>
  )
};

export default Applications;

