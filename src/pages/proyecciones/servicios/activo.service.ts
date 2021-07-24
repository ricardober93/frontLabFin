import axios from "axios";

export const getActivo = (url : string ) => {
  return axios.get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
