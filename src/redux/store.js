import { configureStore } from "@reduxjs/toolkit";

import libraryReducer from "./slice/librarySlice";
import searchReducer from "./slice/searchSlice";

const store = configureStore({
  reducer: {
    library: libraryReducer,
    search: searchReducer,
  },
});

export default store;
