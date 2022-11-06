import { URL_IMG_PLANET, GUIDE_IMG_EXTENSION } from "@constants/Api";

export const getPlanetImage = (id) =>
  `${URL_IMG_PLANET}${id}${GUIDE_IMG_EXTENSION}`;
