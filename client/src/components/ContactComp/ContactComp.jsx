import React ,{ Component } from 'react';
import style from './ContactComp.scss';
import Button from '../UI/Button/Button.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

class ContactComp extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div className={style.ContactCompContainer}>
        <h2>LETS TALK!</h2>
        <p>I'm always up to a challenge and interested in hearing different ideas. Don't be shy and lets talk tech!!!</p>
        <div className={style.contactMeBtnWrapper}>
          {/* <Button btnType="contactMe" link="mailto:jeffcho0227@gmail.com">CONTACT ME</Button> */}
          <a className={style.contactMe_a} href="mailto:jeffcho0227@gmail.com">CONTACT ME</a>
        </div>
        <div className={style.socialMediaBtns}>
          <a className={style.socialMedia_a} href="https://www.linkedin.com/in/jeff-cho/"><FontAwesomeIcon icon={["fab", "linkedin"] } size='3x' color="white"/></a>
          <a className={style.socialMedia_a} href="https://github.com/jeffcho0227"><FontAwesomeIcon icon={["fab", "github"] } size='3x' color="white"/></a>
          <a className={style.socialMedia_a} href="https://www.pictame.com/user/jeff_._cho/followers/1572841"><FontAwesomeIcon icon={["fab", "instagram"] } size='3x' color="white"/></a>
          {/* <Button btnType="socialMedia"><FontAwesomeIcon icon={["fab", "linkedin"] } size='3x' color="white"/></Button>
          <Button btnType="socialMedia"><FontAwesomeIcon icon={["fab", "github"]} size='3x' color="white"/></Button>
          <Button btnType="socialMedia"><FontAwesomeIcon icon={["fab", "instagram"]} size='3x' color="white"/></Button> */}
        </div>
      </div>
    )
  }
};

export default ContactComp;