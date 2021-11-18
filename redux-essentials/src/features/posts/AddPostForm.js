import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";
import { postUpdated } from "./postsSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [update, setUpdate] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onUpdateChanged = (e) => setUpdate(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          title,
          content,
          userId,
        })
      );

      setTitle("");
      setContent("");
      setUpdate("");
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

      setUpdate("");
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

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

        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>

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
          value={update}
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
          disabled={!canSave}
        >
          Update Post
        </button>
      </form>
    </section>
  );
};
