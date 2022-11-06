import { combineReducers } from "redux";

import favouriteReducer from "./favouriteReducer";
import PlanetReducer from "./PlanetReducer";

export default combineReducers({
  favouriteReducer,
  PlanetReducer,
});
