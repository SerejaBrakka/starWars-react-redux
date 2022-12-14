import {
  GUIDE_IMG_EXTENSION,
  QUERY_PARAMS_PEOPLE,
  URL_IMG_PERSON,
} from "@constants/Api";

export const getPeoplePageId = (url) => {
  let pos = url.lastIndexOf(QUERY_PARAMS_PEOPLE);
  let id = url.slice(pos + QUERY_PARAMS_PEOPLE.length, url.length);

  return Number(id);
};

function getId(url) {
  return url.match(/\/\d{1,3}\//)[0].replace(/\//g, "");
}

export const getPeopleId = (url) => getId(url);

export const getItemImage = (id) =>
  `${URL_IMG_PERSON}${id}${GUIDE_IMG_EXTENSION}`;
