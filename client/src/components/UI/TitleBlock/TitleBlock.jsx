import React from 'react';
import style from './TitleBlock.scss';

const TitleBlock = props => {
  console.log(props.children)
  return (
    <div className={style.TitleBlock}>
      <h2>{props.children}</h2>
    </div>
  )
};

export default TitleBlock;