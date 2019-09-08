import React from 'react';
import SkillListItems from './SkillListItems/SkillListItems.jsx';
import style from './SkillList.scss';
import SecLine from '../../UI/SecLine/SecLine.jsx';

const SkillList = props => {

  return (
    <div className={style.SkillList} >
      <h4>{props.subject}</h4>
      {/* <span className={style.separater}></span> */}
      <ul>
        {props.list.map((skill, idx) => {
          return <SkillListItems skill={skill} key={idx}/>
        })}
      </ul>
      <SecLine />
    </div>
  )
};

export default SkillList;