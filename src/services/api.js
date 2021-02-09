import axios from "axios";

const api = axios.create({ baseURL: "http://127.0.0.1:8080/api" });
// const api = axios.create({ baseURL: "http://api.valspotstest.ga" });

export default api;
