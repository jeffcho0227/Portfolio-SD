import React from 'react';
import ContactComp from '../../components/ContactComp/ContactComp.jsx';
import style from './Contact.scss';

const Contact = () => {
  return (
    <div className={style.ContactContainer}>
      <ContactComp />
    </div>
  )
};

export default Contact;