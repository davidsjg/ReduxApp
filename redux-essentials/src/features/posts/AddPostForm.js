import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";
import { postUpdated } from "./postsSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [update, setUpdate] = useState("");

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onUpdateChanged = (e) => setUpdate(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );

      setTitle("");
      setContent("");
    }
  };

  const onUpdatePostClicked = () => {
    if (title && content && update) {
      dispatch(
        postUpdated({
          id: update,
          title,
          content,
        })
      );

      setTitle("");
      setContent("");
      setUpdate("");
    }
  };

  // let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
  // let removed = myFish.splice(3, 1)

  // myFish is ["angel", "clown", "drum", "sturgeon"]
  // removed is ["mandarin"]

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        {/* htmlFor refers to the id of the element this label is associated with */}
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <label htmlFor="postUpdate">ID for Update:</label>
        <input
          type="text"
          id="postUpdate"
          name="postUpdate"
          valeu={update}
          onChange={onUpdateChanged}
        />
        <button
          type="button"
          onClick={onSavePostClicked}
          className="formButton"
        >
          Save Post
        </button>
        <button
          type="button"
          onClick={onUpdatePostClicked}
          className="formButton"
        >
          Update Post
        </button>
      </form>
    </section>
  );
};
