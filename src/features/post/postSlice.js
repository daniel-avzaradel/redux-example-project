import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: "Learning Redux Toolkit", content: "I've heard good things."},
    { id: 2, title: "Slices...", content: "The more I slice, the more I want pizza."},
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        },
    }
});

export const selectAllPost = (state) => state.posts
export const { postAdded } = postSlice.actions
export default postSlice.reducer