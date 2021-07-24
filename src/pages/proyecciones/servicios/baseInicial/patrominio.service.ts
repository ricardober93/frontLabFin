import axios, { AxiosRequestConfig } from "axios";

const token = localStorage.getItem("token");

export const getPatrimonio = (url: string) => {
  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
