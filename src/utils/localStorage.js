export const getLocalStorage = (key) => {
  let data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }
  return {
    favourites: [],
  };
};
export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
