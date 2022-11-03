import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

import { setLocalStorage } from "@utils/localStorage";
import { useEffect } from "react";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  setLocalStorage("store", store.getState().favouriteReducer.favourites);
});

export default store;
