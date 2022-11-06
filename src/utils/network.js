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
    return false;
  }
};

/**
 * Функция принимает массив url и возвращает Promise.all с результатом запроса
 * @param {Array} urls - принимает массив url
 * @returns {Promise} - возвращает Promise.all с результатом запроса
 */
export const makeConcurrentRequest = async (urls) => {
  const res = await Promise.all(
    urls.map((url) => {
      return fetch(url).then((res) => res.json());
    })
  );

  return res;
};
