import React ,{ Component } from 'react';
import style from './ContactComp.scss';

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
      </div>
    )
  }
}

export default ContactComp;