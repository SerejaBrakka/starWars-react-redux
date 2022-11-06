import {
  ADD_PERSON_TO_FAVOURITE,
  REMOVE_PERSON_FROM_FAVOURITE,
  SET_PLANET,
} from "@store/constants/constant";

//PERSON
export const setPersonToFavourite = (person) => ({
  type: ADD_PERSON_TO_FAVOURITE,
  payload: person,
});

export const removePersonFromFavourite = (id) => ({
  type: REMOVE_PERSON_FROM_FAVOURITE,
  payload: id,
});

//PLANET

export const setPlanetRedux = (planet) => ({
  type: SET_PLANET,
  payload: planet,
});
