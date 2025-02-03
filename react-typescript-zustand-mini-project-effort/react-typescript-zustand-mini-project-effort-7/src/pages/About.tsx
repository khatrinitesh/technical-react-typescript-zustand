import React from 'react';
import HeadTitle from '../components/HeadTitle';
import UseScrollTop from '../components/UseScrollTop';

const About:React.FC = () => {
  UseScrollTop();
  return (
    <>
      <div className="content">
        <div className="container mx-auto">
        <HeadTitle headTitleStyle="text-red-500">About</HeadTitle>
        </div>
      </div>
    </>
  );
}

export default About;
