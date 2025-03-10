import React from 'react';
import Banner from '../components/Banner';

const About:React.FC = () => {
  return (
    <>
       <Banner>
        <h3 className='text-red-500 text-[32px]'>About</h3>
        <p className='text-blue-500 text-[20px]'>Description</p>
      </Banner>
    </>
  );
}

export default About;
