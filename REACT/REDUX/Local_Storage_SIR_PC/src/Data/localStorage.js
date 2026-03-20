const loadData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
const saveData = (key, payload) => {
  return localStorage.setItem(key, JSON.stringify(payload));
};

const removeData = (key) => {
  return localStorage.removeItem(key);
};

export { loadData, saveData, removeData };
