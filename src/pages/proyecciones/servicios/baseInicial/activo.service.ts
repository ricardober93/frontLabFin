import axios from "axios";

export const getActivo = async (url : string ) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error;
  }
};
