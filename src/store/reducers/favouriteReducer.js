import {
  ADD_PERSON_TO_FAVOURITE,
  REMOVE_PERSON_FROM_FAVOURITE,
} from "@store/constants/constant";
import { getLocalStorage } from "@utils/localStorage";

let initialState = getLocalStorage("store");

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVOURITE: {
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    }
    case REMOVE_PERSON_FROM_FAVOURITE: {
      return {
        ...state,
        favourites: [
          ...state.favourites.filter((user) => user.id !== action.payload),
        ],
      };
    }
    default:
      return state;
  }
};

export default favouriteReducer;
