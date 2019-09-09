import React from 'React';
import style from './AppImg.scss';

const AppImg = props => {
  return (
    <img className={style.appImg} src={props.appimg} alt="system design picture"/>
  )
}

export default AppImg;