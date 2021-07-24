import axios from "axios";
import { Iactivos, Ipasivos, Ipatrimonio } from "../types/type";

export const createBalance = (
  url : string,
  activos: Iactivos[],
  pasivos: Ipasivos[],
  patrimonio: Ipatrimonio[]
) => {

  return axios
    .post(url, {
      activos,
      pasivos,
      patrimonio,
    },)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
