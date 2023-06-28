import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  mutatedtimes: 0,
  loading: false,
  data: [],
};
export const getData = createAsyncThunk(
  "first/getData",
  async (arg, { rejectWithValue }) => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      return await data.json();
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const FirstStore = createSlice({
  name: "first",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      state.mutatedtimes += 1;
    },
    decrement: (state) => {
      state.count -= 1;
      state.mutatedtimes += 1;
    },
  },
  extraReducers: {
    [getData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload || state.data;
    },
    [getData.rejected]: (state) => {
      state.loading = false;
      state.data = state.data;
    },
  },
});

export const { increment, decrement } = FirstStore.actions;
export default FirstStore.reducer;
