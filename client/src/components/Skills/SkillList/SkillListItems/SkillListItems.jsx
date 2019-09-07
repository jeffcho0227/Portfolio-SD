import React from 'react';
import style from './SkillListItems.scss';

const SkillListItems = props => {
  return (
    <li>
      {props.skill}
    </li>
  )
};

export default SkillListItems;