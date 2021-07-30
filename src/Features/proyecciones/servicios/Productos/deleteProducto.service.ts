import axios from "axios";

export const deleteProdcuctoService = (url: string, id: number) => {
  return axios
    .delete(`${url}/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
