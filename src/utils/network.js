import { HTTP, HTTPS } from "@constants/Api.js";

/**
 * Функция изменяет http на https
 * @param {string} url - url c http
 * @returns {string} - url c https
 */
export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
};

/**
 * Функция отправляет запрос на сервер и возвращает данные в случае успеха , либо false
 * @param {string} url - принимает url из /@constants
 * @returns {Promise} - возвращает промис с результатом запроса.
 */
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error(error.message);
    return false;
  }
};
