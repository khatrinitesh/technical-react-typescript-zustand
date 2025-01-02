import React, { useEffect } from 'react';

import Banner from '../components/Banner';
import usePostStore from '../store/usePostStore';

const Service:React.FC = () => {
  // state global state management from usePostStore
  const {posts,isLoading,isError,fetchPosts,deletePost} = usePostStore();
  useEffect(() => {
    fetchPosts()
  },[fetchPosts])

  if(isLoading){
    return(
      <div>Loading..</div>
    )
  }
  if(isError){
    return(
      <div>{isError}</div>
    )
  }
  return (
    <div className='content'>
      <Banner bannerStyle="text-red-500" title="Service" description="Esse in et nulla ad eiusmod et."/>
      <div className="container mx-auto">
      <h2 className='text-[32px] font-bold'>Posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button className='bg-blue-700 text-white rounded-[10px] px-[30px] py-[5px]' onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Service;
