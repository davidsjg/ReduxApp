import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1firstPost1", title: "First Post!", content: "Hello!" },
  { id: "2secondPost2", title: "Second Post", content: "More text" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    postDeleted(state, action) {
      let newTemp = state.find((post) => post.id === action.payload);

      let temp = state.indexOf(newTemp);

      state.splice(temp, 1);

      // state.splice(state.indexOf(action.payload.id), 1);
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;

      let newTemp = state.find((post) => post.id === id);

      let temp = state.indexOf(newTemp);
      state.splice(temp, 1, action.payload);
    },
  },
});

export const { postAdded, postDeleted, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
