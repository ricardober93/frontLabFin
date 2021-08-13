import axios from "axios";
import { Ivariable } from "../../types/type";

export const createVariable = async (url: string, data: Ivariable) => {
  try {
    return await axios.post(url, data);
  } catch (error) {
    return error;
  }
};
