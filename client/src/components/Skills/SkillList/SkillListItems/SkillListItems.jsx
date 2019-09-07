import React from 'react';
import { PromiseProvider } from 'mongoose';

const SkillListItems = props => {
  return (
    <li>
      {props.skill}
    </li>
  )
};

export default SkillListItems;