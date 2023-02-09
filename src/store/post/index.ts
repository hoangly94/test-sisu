import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AddPostState {
    title: string,
    desription: string,
    content: string,
    featuredImage: string,
}

interface PostState {
    addPost: AddPostState,
}

export const initialState = {
    addPost: {},
} as PostState;

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setFeaturedImaged(state, { payload }: PayloadAction<string>) {
            state.addPost.featuredImage = payload;
        },
        setTitle(state, { payload }: PayloadAction<string>) {
            state.addPost.title = payload;
        },
        setDescription(state, { payload }: PayloadAction<string>) {
            state.addPost.desription = payload;
        },
        setContent(state, { payload }: PayloadAction<string>) {
            state.addPost.content = payload;
        },
    },
})

export const { 
    setFeaturedImaged, 
    setTitle, 
    setDescription, 
    setContent, 
} = postSlice.actions

export default postSlice.reducer