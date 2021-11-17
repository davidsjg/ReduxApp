import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { postDeleted } from "./postsSlice";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const onDeletePostClicked = (e) => {
    console.log(e.target.name);

    dispatch(postDeleted(e.target.name));
  };

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">
        <span>"</span>
        {post.content.substring(0, 100)}
        <span>"</span>
      </p>
      <button name={post.id} type="button" onClick={onDeletePostClicked}>
        Delete
      </button>
    </article>
  ));

  return (
    <section className="post-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
