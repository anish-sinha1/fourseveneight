import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../app/api";
import { db } from "../../App";

export interface IComment {
  user: string;
  post?: string;
  comment?: IComment;
  content: string;
  date: Date;
  directChildComments: IComment[];
}

export interface IPost {
  title: string;
  summary: string;
  content: string;
  image?: string;
  author: string;
  likes: number;
  date: Date;
  slug: string;
  deleted: boolean;
  _id: string;
}

export interface IPostState {
  status: "idle" | "loading" | "failed";
  posts: IPost[];
}

const initialState = {
  status: "idle",
  posts: [] as IPost[],
};

export const getAndLoadPosts = createAsyncThunk(
  "post/loadAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/posts");
      const cachedPostsLength = await db.table("posts").count();
      const cachedPosts = await db.table("posts").toArray();
      if (res.data.posts.length === cachedPostsLength) {
        return cachedPosts;
      }
      await db.table("posts").clear();
      await db.table("posts").bulkPut(res.data.posts);
      return res.data;
    } catch (err) {
      return rejectWithValue("Error loading posts!");
    }
  }
);

export const loadPosts = createAsyncThunk(
  "post/loadPosts",
  async (_, { rejectWithValue }) => {
    try {
      // const res = await api().get("/posts");
    } catch (err) {}
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAndLoadPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAndLoadPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts.push(action?.payload.posts);
      })
      .addCase(getAndLoadPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default postSlice.reducer;
