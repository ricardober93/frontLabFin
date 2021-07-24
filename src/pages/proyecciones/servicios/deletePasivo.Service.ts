import axios from "axios";

export const deletePasivoService = (url: string, id: number) => {
  return axios
    .put(`${url}/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
