import { createSlice, createslice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Joe Sakic" },
  { id: "1", name: "Peter Forsberg" },
  { id: "2", name: "Patrick Roy" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
