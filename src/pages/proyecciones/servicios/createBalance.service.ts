import axios, { AxiosRequestConfig } from "axios";
import { Iactivos, Ipasivos, Ipatrimonio } from "../types/type";

const token = localStorage.getItem('token');

export const createBalance = (
  activos: Iactivos[],
  pasivos: Ipasivos[],
  patrimonio: Ipatrimonio[]
) => {
  const options: AxiosRequestConfig = {
    method: "POST",
    url: "http://127.0.0.1:3333/proyeccion/base-inicial",
    headers: { "Content-Type": "application/json",
    Authorization: `bearer ${token}` },
    data: {
      activos,
      pasivos,
      patrimonio,
    },
  };

  return axios
    .request(options)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
