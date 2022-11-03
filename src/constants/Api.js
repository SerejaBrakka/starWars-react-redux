export const HTTP = "http://";
export const HTTPS = "https://";

//swapi

export const SWAPI_ROOT = "https://swapi.dev/api/";
// export const SWAPI_ROOT = "https://swapi.py4e.com/api/";
export const SWAPI_PEOPLE = "people";

export const QUERY_PARAMS_PEOPLE = "/?page=";
export const SWAPI_PARAM_SEARCH = "/?search=";
export const API_PEOPLE = SWAPI_ROOT + SWAPI_PEOPLE + QUERY_PARAMS_PEOPLE;
export const API_PERSON = SWAPI_ROOT + SWAPI_PEOPLE;
export const API_PERSON_SEARCH = SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_SEARCH;

//visual-guide
export const GUIDE_ROOT_IMG = "https://starwars-visualguide.com/assets/img/";
export const GUIDE_PEOPLE = "characters/";
export const GUIDE_IMG_EXTENSION = ".jpg";
export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE;
