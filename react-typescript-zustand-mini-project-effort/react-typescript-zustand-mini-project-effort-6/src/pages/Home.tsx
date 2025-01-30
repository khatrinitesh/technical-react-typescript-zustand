import React from 'react';
import Banner from '../components/Banner';

const Home:React.FC = () => {
  return (
    <div className='content'>
      <Banner title='Home' description='Qui duis ut proident dolor amet occaecat non eiusmod labore adipisicing.'/>
      <div className="container mx-auto h-full"></div>
    </div>
  );
}

export default Home;
