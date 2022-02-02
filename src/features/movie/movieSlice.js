import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommand: null,
  newDisney: null,
  originals: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies(state, action) {
      state.recommand = action.payload.recommand;
      state.newDisney = action.payload.newDisney;
      state.originals = action.payload.originals;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export const selectRecommand = (state) =>
  state.movie.recommand;
export const selectNewDisney = (state) =>
  state.movie.newDisney;
export const selectOriginals = (state) =>
  state.movie.originals;
export const selectTrending = (state) =>
  state.movie.trending;

export default movieSlice.reducer;
