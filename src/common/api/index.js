import axios from "axios";

export const puxlesApi = axios.create({
    baseURL: "http://localhost:8081/api/v1/"
});
  