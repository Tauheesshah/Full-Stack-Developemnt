const loadData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
const saveData = (key, payload) => {
  return localStorage.setItem(key, JSON.stringify(payload));
};

export { loadData, saveData };
