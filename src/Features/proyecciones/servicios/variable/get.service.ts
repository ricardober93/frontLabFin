import axios from "axios";

export const getVariable = async (url: string) => {
  try {
    return await axios.get(url);
  } catch (error) {
    return error;
  }
};
