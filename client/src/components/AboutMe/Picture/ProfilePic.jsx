import React from 'react';
import style from './ProfilePic.scss';

const ProfilePic = () => {
  return (
      <img 
        className={style.profileImg}
        src="https://s3.amazonaws.com/factmag-images/wp-content/uploads/2016/05/02124601/Super-Mario-no-longer-the-007-616x440.jpg" 
        alt="profile-image"/>
  )
}

export default ProfilePic;