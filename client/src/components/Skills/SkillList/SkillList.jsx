import React from 'react';
import SkillListItems from './SkillListItems/SkillListItems.jsx';

const SkillList = props => {

  return (
    <div>
      <h4>{props.subject}</h4>
      <ul>
        {props.list.map((skill, idx) => {
          return <SkillListItems skill={skill} key={idx}/>
        })}
      </ul>
    </div>
  )
};

export default SkillList;