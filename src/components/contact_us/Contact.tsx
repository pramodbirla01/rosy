import React from 'react';
import ContactHome from './ContactHome';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import ContactFAQ from './ContactFAQ';
import Breadcrumbs from '../shop/Breadcrumbs';

const Contact = () => {
  return (
    <div>
      
       <Breadcrumbs page="Contact"/>
      <ContactHome />
      <ContactDetails />
      <ContactForm />
      <ContactMap />
      <ContactFAQ />
    </div>
  );
};

export default Contact;