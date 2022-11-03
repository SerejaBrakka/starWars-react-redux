export const getLocalStorage = (key) => {
  let data = localStorage.getItem("store");
  if (data !== null) {
    return JSON.parse(data);
  }
  return {};
};
export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
