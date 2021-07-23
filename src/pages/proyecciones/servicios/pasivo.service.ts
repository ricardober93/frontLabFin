import axios, { AxiosRequestConfig } from "axios";

const token = localStorage.getItem('token');

export const getPasivo = () => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "http://127.0.0.1:3333/proyeccion/pasivo",
    headers: {
      Authorization: `bearer ${token}`
    }
  };

  return axios
    .request(options)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
