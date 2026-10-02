import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addSong: (state, action) => {
      const songExists = state.some(
        (song) => song.idAlbum === action.payload.idAlbum
      );

      if (!songExists) {
        state.push(action.payload);
      }
    },

    removeSong: (state, action) => {
      return state.filter(
        (song) => song.idAlbum !== action.payload
      );
    },
  },
});

export const { addSong, removeSong } = librarySlice.actions;

export default librarySlice.reducer;
