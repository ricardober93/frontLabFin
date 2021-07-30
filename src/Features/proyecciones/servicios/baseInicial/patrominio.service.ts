import axios from "axios";


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
