import axios from "axios";

export const deletePasivoService = (url: string, id: number) => {
  return axios
    .delete(`${url}/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
