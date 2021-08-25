
import axios from "axios";

export const getOtherVariable = async (url: string) => {
  try {
    return await axios.get(url);
  } catch (error) {
    return error;
  }
};
