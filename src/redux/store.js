import { createStore, combineReducers } from "redux";
import libraryReducer from "./libraryReducer";

const rootReducer = combineReducers({
    library: libraryReducer,
});

const store = createStore(rootReducer);

export default store;