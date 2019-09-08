import React from 'react';
import style from './AppImages.scss';
import AppImg from './AppImg/AppImg.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Button from '../../UI/Button/Button.jsx';

const AppImages = props => {
  console.log(props)  
  return (
    <div className={style.AppImagesContainerWrapper}>
      <Button btnType="AppImgLeft"><FontAwesomeIcon icon={faArrowLeft} size="lg"/></Button>
      <Button btnType="AppImgRight"><FontAwesomeIcon icon={faArrowRight} size="lg"/></Button>
      <div className={style.AppImagesContainer}>
        {props.AppImages.map((appimg, idx) => {
          return <AppImg appimg={appimg} key={idx}/>
        })}
      </div>

    </div>
  )
};

export default AppImages;