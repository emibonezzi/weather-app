import axios from "axios";

const apiService = axios.create({
  baseURL: "https://api.openweathermap.org",
  params: {
    appid: import.meta.env.VITE_API_KEY,
  },
});

class APIClient {}
