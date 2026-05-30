import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

// 🔐 Attach JWT automatically
instance.interceptors.request.use((config) => {
  const userInfo = localStorage.getItem("userInfo");

  if (userInfo) {
    const user = JSON.parse(userInfo);
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
});

export default instance;