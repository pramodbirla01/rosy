import React from 'react';
import Breadcrumbs from '../shop/Breadcrumbs';
import AboutHome from './AboutHome';     // Import AboutHome component
import AboutHome2 from './AboutHome2';   // Import AboutHome2 component
import Features from './AboutFeature';
import Review_home from '../review/Review_home';
import ContactMap from '../contact_us/ContactMap';
import ContactForm from '../contact_us/ContactForm';


const About = () => {
  return (
    <div>
      {/* Breadcrumbs */}
      <Breadcrumbs page="About" />
      
      {/* AboutHome Section */}
      <AboutHome />
      
      {/* AboutHome2 Section */}
      <AboutHome2 />
      <Features/>
      <Review_home/>
      <ContactMap/>
      <ContactForm/>
     
    </div>
  );
};

export default About;
