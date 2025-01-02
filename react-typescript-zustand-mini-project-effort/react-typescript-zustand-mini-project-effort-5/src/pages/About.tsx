import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import { accordionItems } from '../constants/accordionData';
import AccordionComp from '../components/AccordionComp';
import AlertDialogComp from '../components/AlertDialogComp';
import useAlertStore from '../store/useAlertStore';
import { showAlert } from '../service/alertService';
import CheckboxComp from '../components/CheckboxComp';


const About = () => {
  useEffect(() => {
    // Example: Show an alert after 2 seconds
    setTimeout(() => {
      showAlert("This is an example alert message!");
    }, 2000);
  }, []);
  return (
    <div className='content'>
      <Banner bannerStyle="text-red-500" title="About" description="Esse in et nulla ad eiusmod et."/>
      <div className="container mx-auto">
        <AccordionComp items={accordionItems}/>
        <AlertDialogComp/>
        <CheckboxComp/>
      </div>
    </div>
  );
}

export default About;
