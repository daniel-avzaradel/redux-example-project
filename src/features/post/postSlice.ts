import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = [
    { id: 1, title: "Learning Redux Toolkit", content: "I've heard good things."},
    { id: 2, title: "Slices...", content: "The more I slice, the more I want pizza."},
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {}
});

export const selectAllPost = (state: RootState) => state.posts

export default postSlice.reducer