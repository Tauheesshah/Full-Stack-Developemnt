import axios from "axios";

const instance = axios.create({
  baseURL: "https://laptopwala-backend-1.onrender.com/api",
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