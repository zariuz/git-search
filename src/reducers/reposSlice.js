import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isFetching: false,
  currentPage: 1,
  perPage: 10,
  totalCount: 0,
  isFetchError: false,
};

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setRepos(state, action) {
      state.items = action.payload.items;
      state.totalCount = action.payload.total_count;
      state.isFetching = false;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFetchError(state, action) {
      state.isFetchError = action.payload;
    },
  },
});

export const {
  setRepos,
  setIsFetching,
  setCurrentPage,
  setFetchError,
} = reposSlice.actions;

export default reposSlice.reducer;
