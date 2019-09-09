import React from 'react';
import TechItem from './techItems/techItems.jsx';

const TechStack = props => {
  return (
    <div>
      {props.techStack.map((item, idx) => {
          return <TechItem item={item} key={idx}/>
        })}
    </div>
  )
};

export default TechStack;