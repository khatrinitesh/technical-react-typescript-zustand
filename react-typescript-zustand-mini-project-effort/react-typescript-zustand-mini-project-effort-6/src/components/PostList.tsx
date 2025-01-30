import React, { useEffect } from 'react';
import { usePostStore } from '../store/usePostStore';
import { Post } from '../interface';

const PostList:React.FC = () => {

    const {posts,fetchPosts} = usePostStore();

    useEffect(() => {
        fetchPosts();
    },[fetchPosts]);
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {
            posts.map((post:Post) => (
                <li key={post.id} className='text-white even:bg-red-500 first:pt-0 p-[10px] odd:bg-blue-500 rounded-[10px]'>
                    <h2 className='text-primarycolor'>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))
        }
      </ul>
    </>
  );
}

export default PostList;
