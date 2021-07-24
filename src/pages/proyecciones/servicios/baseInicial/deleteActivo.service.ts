import axios from "axios";

export const deleteActivoService = (url: string, id: number) => {
  return axios
    .put(`${url}/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
