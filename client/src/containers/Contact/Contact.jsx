import React from 'react';
import ContactComp from '../../components/ContactComp/ContactComp.jsx';
import style from './Contact.scss';

const Contact = (props) => {
  return (
    <div className={style.ContactContainer}>
      <ContactComp scrollToTop={props.scrollToTop}/>
    </div>
  )
};

export default Contact;