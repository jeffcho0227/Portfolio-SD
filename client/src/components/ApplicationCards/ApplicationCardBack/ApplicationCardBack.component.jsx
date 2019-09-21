import React from 'react';
import style from './ApplicationCardBack.module.scss';

import TechItem from './TechItem/TechItem.jsx';
import Button from '../../UI/Button/Button.jsx';

const ApplicationCardBack = ({ Description, TeckStack, handleModalSwitch, Link}) => {
  console.log(Link)
  return (
    <div className={style.ApplicationCardBack}>
      <div className={style.description}>
        { Description }
      </div>
      <div className={style.techStack}>
        {TeckStack.map((item, idx) => <TechItem skill={item} key={idx}/>)}
      </div>
      <div className={style.atagContainer}>
        {Link ? <a href={Link} target='_blank'>View Project</a> : null}
      </div>
      {/* <Button click={handleModalSwitch}>View Details</Button> */}
    </div>
  );
};

export default ApplicationCardBack; 