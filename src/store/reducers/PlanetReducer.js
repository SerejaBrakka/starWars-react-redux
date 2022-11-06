import { SET_PLANET } from "@store/constants/constant";

let initialState = {
  planet: [],
};

const PlanetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANET: {
      return {
        ...state,
        planet: [action.payload],
      };
    }

    default:
      return state;
  }
};

export default PlanetReducer;
