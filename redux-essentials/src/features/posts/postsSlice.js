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
      let temp = state.indexOf(action.payload);
      console.log(temp);
      // let result = state.filter((post) => {
      //   console.log(post);
      //   return post.id === action.payload;
      // });
      // console.log(result);
      state.splice(temp, 1);
    },
  },
});

export const { postAdded, postDeleted } = postsSlice.actions;

export default postsSlice.reducer;
