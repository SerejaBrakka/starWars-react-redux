import { GUIDE_IMG_EXTENSION, URL_IMG_PERSON } from "@constants/Api";

function getId(url) {
  return url.match(/\d{1,3}/)[0];
}

export const getPeopleId = (url) => getId(url);

export const getItemImage = (id) =>
  `${URL_IMG_PERSON}${id}${GUIDE_IMG_EXTENSION}`;
