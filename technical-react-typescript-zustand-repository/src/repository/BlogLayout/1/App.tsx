import React, { useEffect, useState } from "react";
import { useBlogLayoutStore } from "./../../../store/useBlogLayout";
import { BlogPostProps } from "./../../../types";

const RepositoryApp: React.FC = () => {
  return (
    <>
      <PostForm/>
      <BlogList />
    </>
  );
};

export default RepositoryApp;

const PostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const addPost = useBlogLayoutStore((state) => state.addPost);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      const newPost = {
        id: Date.now(),
        title,
        content,
      };
      addPost(newPost);
      setTitle("");
      setContent("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post Content"
          required
        />
        <button type="submit">Add Post</button>
      </form>
    </>
  );
};

const BlogList: React.FC = () => {
  const posts = useBlogLayoutStore((state) => state.posts);
  return (
    <>
      <div className="blog-list">
        {posts.map((post) => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

const BlogPost: React.FC<BlogPostProps> = ({ id, title, content }) => {
  const removePost = useBlogLayoutStore((state) => state.removePost);

  return (
    <>
      <div className="blog-post">
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={() => removePost(id)}>Delete</button>
      </div>
    </>
  );
};
