import {
  ADD_PERSON_TO_FAVOURITE,
  REMOVE_PERSON_FROM_FAVOURITE,
} from "@store/constants/constant";

export const setPersonToFavourite = (person) => ({
  type: ADD_PERSON_TO_FAVOURITE,
  payload: person,
});

export const removePersonFromFavourite = (id) => ({
  type: REMOVE_PERSON_FROM_FAVOURITE,
  payload: id,
});
