import axios from "axios";


export const getPasivo = (url : string) => {
  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
