import axios from "axios";

export const updateActivoService = (url: string, id: number, data: any) => {
  return axios
    .put(`${url}/${id}`, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
