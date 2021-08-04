import axios from "axios";

export const getSalarios = async (url : string ) => {
  try {
    return await axios.get(url);
  } catch (error) {
    return error;
  }
};
