import axios, { AxiosRequestConfig } from "axios";

export const getActivo = () => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "http://127.0.0.1:3333/proyeccion/activo",
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
