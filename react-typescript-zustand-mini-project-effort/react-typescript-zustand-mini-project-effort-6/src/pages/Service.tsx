import React from 'react';
import Banner from '../components/Banner';
import PostList from '../components/PostList';

const Service:React.FC = () => {
  return (
    <>
      <div className="content">
      <Banner title='Service' description='Qui duis ut proident dolor amet occaecat non eiusmod labore adipisicing.'/>
      <div className="container mx-auto h-full">
      <PostList/>
      </div>
      </div>
    </>
  );
}

export default Service;
